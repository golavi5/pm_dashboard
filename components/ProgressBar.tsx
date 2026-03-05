// Progress bar with percentage

interface ProgressBarProps {
  progress: number; // 0-100
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function ProgressBar({ 
  progress, 
  showLabel = true,
  size = 'md',
  color
}: ProgressBarProps) {
  // Clamp progress between 0 and 100
  const percentage = Math.min(Math.max(progress, 0), 100);
  
  // Determine color based on progress
  const getColor = () => {
    if (color) return color;
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };
  
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className={`${getColor()} ${heights[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">Progress</span>
          <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
        </div>
      )}
    </div>
  );
}
