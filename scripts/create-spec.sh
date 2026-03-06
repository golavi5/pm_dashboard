#!/bin/bash
# Create a spec issue and automatically add to project

if [ -z "$1" ]; then
  echo "Usage: ./scripts/create-spec.sh <title> <body-file>"
  echo "Example: ./scripts/create-spec.sh 'My Feature' spec.md"
  exit 1
fi

TITLE="[SPEC] $1"
BODY_FILE="$2"

# GitHub Project settings
PROJECT_ID="PVT_kwHOAVj1qc4A_PAJ"
PROJECT_NUMBER="3"
OWNER="golavi5"
STATUS_FIELD_ID="PVTSSF_lAHOAVj1qc4A_PAJzgyZhrk"
SPECS_COLUMN_ID="f75ad846"

echo "Creating spec issue..."

# Create issue
if [ -f "$BODY_FILE" ]; then
  ISSUE_URL=$(gh issue create --title "$TITLE" --body-file "$BODY_FILE")
else
  ISSUE_URL=$(gh issue create --title "$TITLE" --body "$2")
fi

if [ -z "$ISSUE_URL" ]; then
  echo "❌ Failed to create issue"
  exit 1
fi

echo "✅ Issue created: $ISSUE_URL"

# Extract issue number
ISSUE_NUMBER=$(echo "$ISSUE_URL" | grep -o '[0-9]*$')

# Add to project
echo "Adding to project..."
gh project item-add $PROJECT_NUMBER --owner $OWNER --url "$ISSUE_URL"

# Get item ID
sleep 2  # Wait for API sync
ITEM_ID=$(gh project item-list $PROJECT_NUMBER --owner $OWNER --format json | \
  jq -r ".items[] | select(.content.number == $ISSUE_NUMBER) | .id")

if [ -z "$ITEM_ID" ]; then
  echo "⚠️ Added to project but couldn't move to Specs column"
  exit 0
fi

# Move to Specs column
echo "Moving to Specs column..."
gh project item-edit --project-id $PROJECT_ID \
  --id "$ITEM_ID" \
  --field-id $STATUS_FIELD_ID \
  --single-select-option-id $SPECS_COLUMN_ID

echo ""
echo "✅ Complete!"
echo "   Issue: $ISSUE_URL"
echo "   Project: https://github.com/users/$OWNER/projects/$PROJECT_NUMBER"
echo "   Status: Specs (ready for review)"
