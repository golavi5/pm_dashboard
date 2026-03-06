// Executive metric card

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
  subtitle?: string;
}

export function MetricCard({ 
  title, 
  value, 
  icon, 
  trend,
  change,
  subtitle 
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend === 'up') return '▲';
    if (trend === 'down') return '▼';
    return '→';
  };

  const getTrendColor = () => {
    if (!trend) return 'text-gray-500 dark:text-gray-400';
    if (trend === 'up') return 'text-green-600 dark:text-green-400';
    if (trend === 'down') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-lg p-4 hover:shadow-md dark:hover:shadow-gray-700 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {trend && change !== undefined && (
          <span className={`text-xs font-medium ${getTrendColor()}`}>
            {getTrendIcon()} {Math.abs(change)}%
          </span>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
      
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
        {value}
      </div>
      
      {subtitle && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
