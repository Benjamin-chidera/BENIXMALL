import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xpellkwdldgjtndmjzsw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZWxsa3dkbGRnanRuZG1qenN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NjgzMDMsImV4cCI6MjAxMjI0NDMwM30.diofaXrfvh51myfJJEspynSCNMhQF8r9jOBVCMiOr-Q";
export const supabase = createClient(supabaseUrl, supabaseKey);
