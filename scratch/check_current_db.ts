import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gugtulhzhkseurxkenen.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z3R1bGh6aGtzZXVyeGtlbmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NzQxOTIsImV4cCI6MjA4NTQ1MDE5Mn0._tE-Ak95QnpWhDXESBTPuM_uCKbD-2o6r_fn0DgpA38'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkActualData() {
  const { data, error } = await supabase.from('products').select('*')
  if (error) {
    console.log("Error fetching products:", error)
  } else {
    console.log("Data count:", data.length)
    if (data.length > 0) {
      console.log("First row keys:", Object.keys(data[0]))
      console.log("First row data:", JSON.stringify(data[0], null, 2))
    }
  }
}

checkActualData()
