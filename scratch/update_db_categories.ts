import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gugtulhzhkseurxkenen.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1Z3R1bGh6aGtzZXVyeGtlbmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NzQxOTIsImV4cCI6MjA4NTQ1MDE5Mn0._tE-Ak95QnpWhDXESBTPuM_uCKbD-2o6r_fn0DgpA38'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function updateCategories() {
  console.log("Checking for 'PRIVATE READING' or 'Premium Report' in DB...")
  
  const { data: privates, error: err1 } = await supabase
    .from('products')
    .select('id, name, category')
    .or('category.eq.PRIVATE READING,category.eq.Premium Report')

  if (err1) {
    console.error("Error searching:", err1)
    return
  }

  if (!privates || privates.length === 0) {
    console.log("No products found with old category names.")
    return
  }

  console.log(`Found ${privates.length} products to update.`)
  for (const p of privates) {
    console.log(`Updating ${p.name} (${p.category}) -> PREMIUM REPORT`)
    const { error: err2 } = await supabase
      .from('products')
      .update({ category: 'PREMIUM REPORT' })
      .eq('id', p.id)
    
    if (err2) console.error(`Failed to update ${p.name}:`, err2)
    else console.log(`Successfully updated ${p.name}`)
  }
}

updateCategories()
