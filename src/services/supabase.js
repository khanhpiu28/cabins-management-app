import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ochpmqnislqpphgojncx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jaHBtcW5pc2xxcHBoZ29qbmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NzkxNTIsImV4cCI6MjA1NzQ1NTE1Mn0.azPzqQcYG5-WmfleeFfOTWso_TqiOzXn-SSljenvcFk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
