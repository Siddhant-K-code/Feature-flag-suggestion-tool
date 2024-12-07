import React from 'react';
import type { AnalysisResult } from '../types';

interface MetricsGridProps {
  metrics: AnalysisResult['metrics'];
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
          </h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}