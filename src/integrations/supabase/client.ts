// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wxyvcnxuhvadiasoiduj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4eXZjbnh1aHZhZGlhc29pZHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MjQ4NDYsImV4cCI6MjA2MjAwMDg0Nn0.kreOLdLom82zorKazhvRtGSkCeyVdsbjkGvL7DIxL6I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);