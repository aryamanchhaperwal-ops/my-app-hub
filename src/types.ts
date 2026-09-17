export type AppStatus = 'Available' | 'Prototype' | 'Coming Soon';

export type AppCategory = 
  | 'Productivity' 
  | 'E-commerce' 
  | 'Writing' 
  | 'Education' 
  | 'AI' 
  | 'AI & Education' 
  | 'AI & Creative' 
  | 'Creative' 
  | 'Other'
  | string;

export interface AppItem {
  id: number | string;
  name: string;
  description: string;
  category: AppCategory;
  type: 'Full App' | 'Prototype' | string;
  platform: string;
  url: string;
  status: AppStatus;
  thumbnail: string;
  featured: boolean;
  buttonText: 'OPEN APP' | 'TRY PROTOTYPE' | 'COMING SOON' | string;
  releaseDate?: string;
  tags?: string[];
}

export type CategoryFilter = 
  | 'ALL' 
  | 'AI' 
  | 'PRODUCTIVITY' 
  | 'EDUCATION' 
  | 'WRITING' 
  | 'E-COMMERCE' 
  | 'CREATIVE' 
  | 'OTHER';

export type StatusFilter = 
  | 'ALL' 
  | 'AVAILABLE' 
  | 'PROTOTYPES' 
  | 'COMING SOON';
