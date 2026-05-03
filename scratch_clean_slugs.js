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

async function cleanSlugs() {
  const { data, error } = await supabase
    .from('products')
    .select('id, slug, name')
  
  if (error) return console.error(error)

  for (const p of data) {
    const cleanedSlug = p.slug.trim()
    const cleanedName = p.name.trim()
    if (cleanedSlug !== p.slug || cleanedName !== p.name) {
      await supabase
        .from('products')
        .update({ slug: cleanedSlug, name: cleanedName })
        .eq('id', p.id)
      console.log(`Cleaned: ${p.slug} -> ${cleanedSlug}`)
    }
  }
  console.log('Slug cleaning finished.')
}

cleanSlugs()
