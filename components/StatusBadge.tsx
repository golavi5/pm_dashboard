// Status indicator badge

interface StatusBadgeProps {
  status: 'on-track' | 'attention' | 'blocked';
  phase?: string;
}

export function StatusBadge({ status, phase }: StatusBadgeProps) {
  const styles = {
    'on-track': {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-300',
      icon: '🟢',
      label: 'On Track'
    },
    'attention': {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-800 dark:text-yellow-300',
      icon: '🟡',
      label: 'Needs Attention'
    },
    'blocked': {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-800 dark:text-red-300',
      icon: '🔴',
      label: 'Blocked'
    }
  };

  const style = styles[status];

  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${style.bg} ${style.text} transition-colors duration-200`}
      >
        <span>{style.icon}</span>
        <span>{style.label}</span>
      </span>
      {phase && (
        <span className="text-sm text-gray-600 dark:text-gray-400">• {phase}</span>
      )}
    </div>
  );
}
