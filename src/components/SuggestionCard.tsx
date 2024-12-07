import React from 'react';
import { Code2, Flag, AlertTriangle, Zap } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { FlagSuggestion } from '../types';

interface SuggestionCardProps {
  suggestion: FlagSuggestion;
}

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'experiment':
      return <Zap className="w-5 h-5" />;
    case 'release':
      return <Flag className="w-5 h-5" />;
    case 'permission':
      return <AlertTriangle className="w-5 h-5" />;
    default:
      return <Code2 className="w-5 h-5" />;
  }
};

export const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="p-2 bg-gray-100 rounded-lg">
            {getTypeIcon(suggestion.type)}
          </span>
          <h3 className="text-lg font-semibold">{suggestion.name}</h3>
        </div>
        <span className={`font-medium ${getImpactColor(suggestion.impact)}`}>
          {suggestion.impact.toUpperCase()} IMPACT
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{suggestion.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Confidence Score</span>
          <span className="text-sm font-medium">{suggestion.confidence}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-black rounded-full h-2"
            style={{ width: `${suggestion.confidence}%` }}
          />
        </div>
      </div>

      {suggestion.codeSnippet && (
        <div className="mt-4">
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem'
            }}
          >
            {suggestion.codeSnippet}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}