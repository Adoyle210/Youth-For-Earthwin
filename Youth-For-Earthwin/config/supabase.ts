import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Supabase setup
const supabaseUrl = 'https://amkzvephsfofjwvwmbgp.supabase.co' // API url for supabase
// Supabase anon key, this is safe to be exposed to the public.
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFta3p2ZXBoc2ZvZmp3dndtYmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5OTA3MTksImV4cCI6MTk5NDU2NjcxOX0.tfKo64IRwj-kdWxWOFt7JmoUcqFpLtzAGZgLBb9zQmU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})