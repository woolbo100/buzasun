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

async function listAll() {
  const { data } = await supabase.from('products').select('name, slug')
  data.forEach(p => console.log(`NAME: [${p.name}] SLUG: [${p.slug}]`))
}

listAll()
