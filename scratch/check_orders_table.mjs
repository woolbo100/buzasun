import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase env vars. Make sure to run with --env-file=.env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTable() {
  try {
    const { data, error } = await supabase.from('orders').select('*').limit(1)
    if (error) {
      if (error.code === 'P0001' || error.message.includes('does not exist') || error.code === '42P01') {
        console.log('❌ orders table does NOT exist')
      } else {
        console.log('⚠️ Error checking orders table:', error.message)
      }
    } else {
      console.log('✅ orders table exists')
    }
  } catch (err) {
    console.error('💥 Critical error:', err)
  }
}

checkTable()
