import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gugtulhzhkseurxkenen.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z3R1bGh6aGtzZXVyeGtlbmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NzQxOTIsImV4cCI6MjA4NTQ1MDE5Mn0._tE-Ak95QnpWhDXESBTPuM_uCKbD-2o6r_fn0DgpA38'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkCategories() {
  const { data, error } = await supabase.from('products').select('name, category')
  if (error) {
    console.log("Error fetching products:", error)
  } else {
    console.log("Current Categories in DB:")
    const categories = [...new Set(data.map(p => p.category))]
    console.log(categories)
    console.log("\nProducts and their categories:")
    data.forEach(p => console.log(`- ${p.name}: ${p.category}`))
  }
}

checkCategories()
