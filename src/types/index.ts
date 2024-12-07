export interface FlagSuggestion {
  id: string;
  name: string;
  description: string;
  type: 'experiment' | 'release' | 'permission' | 'operational';
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  codeSnippet?: string;
}

export interface AnalysisResult {
  suggestions: FlagSuggestion[];
  metrics: {
    totalSuggestions: number;
    highConfidence: number;
    mediumConfidence: number;
    lowConfidence: number;
  };
}