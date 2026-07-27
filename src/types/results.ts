export type ExamType = 'board' | 'jee' | 'neet' | 'cet';

export interface SubjectMark {
  name: string;
  marks: number;
  maxMarks?: number;
}

export type BoardResult = {
  type: 'board';
  year: string;
  percentage: number;
  subjects: SubjectMark[];
};

export type CompetitiveResult = {
  type: 'jee' | 'neet' | 'cet';
  year: string;
  score: string;
  rankOrPercentile?: string;
  subjects?: SubjectMark[];
};

export type ExamResult = BoardResult | CompetitiveResult;

export interface Student {
  id: string;
  name: string;
  photo?: string; // Optional student photo
  batch?: string;
  quote?: string;
  badge?: string;
  topperRank?: 1 | 2 | 3;
  results: ExamResult[];
}
