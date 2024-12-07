import React from 'react';
import { Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <Brain className="w-8 h-8 text-gray-800" />
      <h1 className="text-2xl font-bold">AI Feature Flag Suggestions</h1>
    </div>
  );
}