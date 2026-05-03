const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

const envContent = fs.readFileSync('./.env.local', 'utf8')
const envMap = {}
envContent.split('\n').forEach(line => {
  const parts = line.split('=')
  if (parts.length === 2) {
    envMap[parts[0].trim()] = parts[1].trim()
  }
})

const supabaseUrl = envMap['NEXT_PUBLIC_SUPABASE_URL']
const supabaseKey = envMap['NEXT_PUBLIC_SUPABASE_ANON_KEY']
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkSlugs() {
  const { data, error } = await supabase
    .from('products')
    .select('name, slug, id')
  
  if (error) {
    console.error('Error:', error)
    return
  }
  
  console.log('Current DB Slugs and IDs:')
  console.table(data)
}

checkSlugs()
