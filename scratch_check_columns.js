const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumns() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching:', error);
    return;
  }

  if (data && data.length > 0) {
    console.log('Columns in products table:', Object.keys(data[0]));
    console.log('Sample product data:', JSON.stringify(data[0], null, 2));
  } else {
    console.log('No data found');
  }
}

checkColumns();
