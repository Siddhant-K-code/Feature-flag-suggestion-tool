import React, { useState } from 'react';
import type { AnalysisResult } from '../types';
import { Header } from './Header';
import { ActionButtons } from './ActionButtons';
import { MetricsGrid } from './MetricsGrid';
import { SuggestionCard } from './SuggestionCard';
import { AnalyzeModal } from './AnalyzeModal';
import { Analytics } from './Analytics';

interface DashboardProps {
  analysisResult: AnalysisResult;
}

export const Dashboard: React.FC<DashboardProps> = ({ analysisResult }) => {
  const [showAnalyzeModal, setShowAnalyzeModal] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleAnalyzePR = (prUrl: string) => {
    console.log('Analyzing PR:', prUrl);
    // Here you would typically make an API call to analyze the PR
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Header />
          <ActionButtons
            onAnalyzeClick={() => setShowAnalyzeModal(true)}
            onAnalyticsClick={() => setShowAnalytics(!showAnalytics)}
          />
        </div>

        {showAnalytics ? (
          <Analytics />
        ) : (
          <>
            <MetricsGrid metrics={analysisResult.metrics} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysisResult.suggestions.map((suggestion) => (
                <SuggestionCard key={suggestion.id} suggestion={suggestion} />
              ))}
            </div>
          </>
        )}

        <AnalyzeModal
          isOpen={showAnalyzeModal}
          onClose={() => setShowAnalyzeModal(false)}
          onAnalyze={handleAnalyzePR}
        />
      </div>
    </div>
  );
}