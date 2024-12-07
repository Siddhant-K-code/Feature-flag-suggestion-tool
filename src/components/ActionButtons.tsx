import React from 'react';
import { GitPullRequest, BarChart3 } from 'lucide-react';

interface ActionButtonsProps {
  onAnalyzeClick: () => void;
  onAnalyticsClick: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onAnalyzeClick,
  onAnalyticsClick,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onAnalyzeClick}
        className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <GitPullRequest className="w-5 h-5" />
        <span>Analyze PR</span>
      </button>
      <button
        onClick={onAnalyticsClick}
        className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <BarChart3 className="w-5 h-5" />
        <span>View Analytics</span>
      </button>
    </div>
  );
}