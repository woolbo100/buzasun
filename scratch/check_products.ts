import { supabase } from './lib/supabase'

async function checkProducts() {
  const { data, error } = await supabase.from('products').select('slug, name, image')
  if (error) {
    console.error(error)
  } else {
    console.log(JSON.stringify(data, null, 2))
  }
}

checkProducts()
