// Status indicator badge

interface StatusBadgeProps {
  status: 'on-track' | 'attention' | 'blocked';
  phase?: string;
}

export function StatusBadge({ status, phase }: StatusBadgeProps) {
  const styles = {
    'on-track': {
      bg: 'bg-green-100',
      text: 'text-green-800',
      icon: '🟢',
      label: 'On Track'
    },
    'attention': {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      icon: '🟡',
      label: 'Needs Attention'
    },
    'blocked': {
      bg: 'bg-red-100',
      text: 'text-red-800',
      icon: '🔴',
      label: 'Blocked'
    }
  };

  const style = styles[status];

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${style.bg} ${style.text}`}
      >
        <span>{style.icon}</span>
        <span>{style.label}</span>
      </span>
      {phase && (
        <span className="text-sm text-gray-600">• {phase}</span>
      )}
    </div>
  );
}
