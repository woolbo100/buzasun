const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

// .env.local 파일에서 수동으로 환경 변수 추출
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

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key not found in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function syncPrices() {
  const updates = [
    { slug: 'love-code-report', price: 39000 },
    { slug: 'love-secret-ebook', price: 19000 },
    { slug: 'abundance-secret-guide', price: 19000 },
    { slug: 'reunion-secret-method', price: 19000 }
  ]

  console.log('Starting Price Sync...')

  for (const update of updates) {
    const { error } = await supabase
      .from('products')
      .update({ price: update.price })
      .eq('slug', update.slug)
    
    if (error) {
      console.error(`Failed to update ${update.slug}:`, error)
    } else {
      console.log(`Successfully updated ${update.slug} to ${update.price}`)
    }
  }

  console.log('Price Sync Finished.')
}

syncPrices()
