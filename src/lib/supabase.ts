import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ImpactStory = {
  id: string;
  alias: string;
  category: string;
  challenge: string;
  solution: string;
  impact_metrics: string[];
  tech_stack: string[];
  sort_order: number;
  is_featured: boolean;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  project_type: string | null;
  message: string;
  status: string;
  created_at: string;
};
