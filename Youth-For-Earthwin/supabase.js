import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vqlfgjyxdpstyipnarby.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxbGZnanl4ZHBzdHlpcG5hcmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MzY2NTEsImV4cCI6MTk5NjMxMjY1MX0.HccR7DE1Ht_zXQWBP2CHSwUXxEleg-j0_cGq3q-9Zbs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;