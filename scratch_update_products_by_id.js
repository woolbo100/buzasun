const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateProducts() {
  console.log('Starting products update by ID...');

  // 1. 풍요비책 업데이트 (ID 기준)
  const { data: updateAbundance, error: errAbundance } = await supabase
    .from('products')
    .update({ 
      product_id: 'abundance-secret-guide', 
      slug: 'abundance-secret-guide',
      is_active: true,
      show_on_main: true
    })
    .eq('id', '10898351-7c14-4912-a970-f079dd477b1a')
    .select();

  if (errAbundance) {
    console.error('Error updating abundance:', errAbundance);
  } else {
    console.log('Abundance updated successfully. Result:', updateAbundance);
  }

  // 2. 연애비급 업데이트 (ID 기준)
  const { data: updateLove, error: errLove } = await supabase
    .from('products')
    .update({ 
      product_id: 'love-secret-ebook',
      slug: 'love-secret-ebook',
      is_active: true,
      show_on_main: true
    })
    .eq('id', 'bb61bbaa-365e-41d4-adc8-132f9043270d')
    .select();

  if (errLove) {
    console.error('Error updating love-secret-ebook:', errLove);
  } else {
    console.log('Love-secret-ebook updated successfully. Result:', updateLove);
  }

  // 3. 재회비방 업데이트 (ID 기준)
  const { data: updateReunion, error: errReunion } = await supabase
    .from('products')
    .update({ 
      product_id: 'reunion-secret-method',
      slug: 'reunion-secret-method',
      is_active: true,
      show_on_main: true
    })
    .eq('id', '5594bf01-0b83-443d-8a33-1235b4053d82')
    .select();

  if (errReunion) {
    console.error('Error updating reunion-secret-method:', errReunion);
  } else {
    console.log('Reunion-secret-method updated successfully. Result:', updateReunion);
  }

  console.log('Update finished.');
}

updateProducts();
