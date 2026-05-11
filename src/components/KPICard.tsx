interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export function KPICard({ title, value, change, icon, trend = 'neutral' }: KPICardProps) {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  const trendBg = trend === 'up' ? 'bg-green-50' : trend === 'down' ? 'bg-red-50' : 'bg-gray-50';

  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-2 ${trendColor}`}>
              {change > 0 ? '+' : ''}{change}% vs período anterior
            </p>
          )}
        </div>
        {icon && (
          <div className={`p-3 rounded-lg ${trendBg}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
