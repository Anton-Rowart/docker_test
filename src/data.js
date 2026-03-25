
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://krtvzhzbhkzewpwtolyf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtydHZ6aHpiaGt6ZXdwd3RvbHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTIyNzcsImV4cCI6MjA2NTUyODI3N30.2i1b_0QckajIEsnH_TcvaAZppHkOTC43QhxCKO1XRO0'

export const supabase = createClient(supabaseUrl, supabaseKey)
