const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: './.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
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
    const { data, error } = await supabase
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
