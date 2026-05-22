const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDetail() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching:', error);
    return;
  }

  const targets = data.filter(p => 
    p.name.includes('연애') || 
    p.name.includes('재회') || 
    p.name.includes('풍요') ||
    p.name.includes('비급') ||
    p.name.includes('비방') ||
    p.name.includes('비책')
  );

  console.log('--- Found Products ---');
  console.log(JSON.stringify(targets, null, 2));
}

checkDetail();
