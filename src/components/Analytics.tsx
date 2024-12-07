import React from 'react';
import { LineChart, BarChart, Activity } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Feature Flag Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Active Flags</h3>
            <Activity className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold">24</p>
        </div>
        
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Total Evaluations</h3>
            <BarChart className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold">1.2M</p>
        </div>
        
        <div className="p-4 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Success Rate</h3>
            <LineChart className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold">99.9%</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium mb-2">Most Active Feature Flags</h3>
        {['Dark Mode', 'New UI', 'Beta Features'].map((flag, index) => (
          <div key={flag} className="flex items-center justify-between p-4 border rounded-lg">
            <span>{flag}</span>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {Math.round(Math.random() * 100000)} evaluations
              </span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-black rounded-full h-2"
                  style={{ width: `${100 - (index * 20)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}