import React from 'react';
import { Dashboard } from './components/Dashboard';
import type { AnalysisResult } from './types';

const mockAnalysisResult: AnalysisResult = {
  suggestions: [
    {
      id: '1',
      name: 'Dark Mode Toggle',
      description: 'Implement a feature flag for the new dark mode theme to gradually roll out to users and gather feedback.',
      type: 'experiment',
      confidence: 95,
      impact: 'medium',
      codeSnippet: `const darkMode = await client.variable(
  user,
  'dark-mode-enabled',
  false
);

if (darkMode) {
  document.body.classList.add('dark');
}`
    },
    {
      id: '2',
      name: 'AI Chat Feature',
      description: 'Control access to the new AI-powered chat feature and monitor performance impact.',
      type: 'release',
      confidence: 88,
      impact: 'high',
      codeSnippet: `if (await client.variable(user, 'ai-chat-enabled', false)) {
  return <AIChatComponent />;
}`
    },
    {
      id: '3',
      name: 'Premium Features',
      description: 'Gate access to premium features based on user subscription status.',
      type: 'permission',
      confidence: 92,
      impact: 'medium'
    }
  ],
  metrics: {
    totalSuggestions: 3,
    highConfidence: 2,
    mediumConfidence: 1,
    lowConfidence: 0
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard analysisResult={mockAnalysisResult} />
    </div>
  );
}

export default App;