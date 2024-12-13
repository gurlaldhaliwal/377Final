import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cowshmplnpofhhmdzqvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd3NobXBsbnBvZmhobWR6cXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNTYxNDYsImV4cCI6MjA0OTYzMjE0Nn0.ccK7TIssBPTO0Yxf6l289jegxwYiHlM8xJ9sDz9AUQg';

export const supabase = createClient(supabaseUrl, supabaseKey);
