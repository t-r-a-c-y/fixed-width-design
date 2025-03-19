
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface HospitalStatCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  color?: string;
  chart?: ReactNode;
  secondaryValue?: string;
  secondaryLabel?: string;
}

const HospitalStatCard: React.FC<HospitalStatCardProps> = ({
  title,
  value,
  icon,
  color = "#4f46e5",
  chart,
  secondaryValue,
  secondaryLabel,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
          <div className="text-sm font-medium text-muted-foreground">{title}</div>
          <div className="flex items-baseline justify-between">
            <div className="text-2xl font-bold" style={{ color }}>{value}</div>
            {secondaryValue && (
              <div className="text-sm">
                <span className="font-medium">{secondaryValue}</span>
                {secondaryLabel && (
                  <span className="text-muted-foreground ml-1">{secondaryLabel}</span>
                )}
              </div>
            )}
          </div>
          {chart && <div className="pt-4">{chart}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default HospitalStatCard;
