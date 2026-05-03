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

async function forceUpdateSlugs() {
  const mappings = [
    { old: 'love-code-report', new: 'baekdohwa-report' },
    { old: 'premium-compatibility-report', new: 'premium-compatibility-report' }, // already close
    { old: 'love-secret-ebook', new: 'love-secret' },
    { old: ' abundance-secret-guide', new: 'abundance-secret' },
    { old: 'reunion-secret-method', new: 'reunion-secret' },
    { old: 'miss-highlander', new: 'miss-highlander' },
    { old: 'wangbitna-cream', new: 'wangbitna-cream' }
  ]

  console.log('Starting Force Slug Update...')

  const { data } = await supabase.from('products').select('*')
  
  for (const p of data) {
    const trimmedSlug = p.slug.trim()
    const match = mappings.find(m => m.old.trim() === trimmedSlug)
    if (match) {
      const { error } = await supabase
        .from('products')
        .update({ slug: match.new, name: p.name.trim() })
        .eq('id', p.id)
      
      if (error) console.error(`Failed ${p.slug}:`, error)
      else console.log(`Updated: [${p.slug}] -> [${match.new}]`)
    }
  }
  console.log('Force Slug Update Finished.')
}

forceUpdateSlugs()
