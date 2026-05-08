const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('id, productId, slug, name, type, category');

  if (error) {
    console.error('Error fetching products:', error);
    return;
  }

  console.log('--- Current Products in DB ---');
  console.table(data);
}

checkProducts();
