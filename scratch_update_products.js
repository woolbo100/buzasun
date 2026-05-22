const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateProducts() {
  console.log('Starting products update...');

  // 1. 풍요비책의 앞 공백 제거
  const { data: updateAbundance, error: errAbundance } = await supabase
    .from('products')
    .update({ 
      product_id: 'abundance-secret-guide', 
      slug: 'abundance-secret-guide',
      is_active: true,
      show_on_main: true
    })
    .eq('product_id', ' abundance-secret-guide');

  if (errAbundance) {
    console.error('Error updating abundance:', errAbundance);
  } else {
    console.log('Abundance updated successfully or already clean.');
  }

  // 2. 연애비급 업데이트 (안전용)
  const { data: updateLove, error: errLove } = await supabase
    .from('products')
    .update({ 
      is_active: true,
      show_on_main: true
    })
    .eq('product_id', 'love-secret-ebook');

  if (errLove) {
    console.error('Error updating love-secret-ebook:', errLove);
  } else {
    console.log('Love-secret-ebook updated successfully.');
  }

  // 3. 재회비방 업데이트 (안전용)
  const { data: updateReunion, error: errReunion } = await supabase
    .from('products')
    .update({ 
      is_active: true,
      show_on_main: true
    })
    .eq('product_id', 'reunion-secret-method');

  if (errReunion) {
    console.error('Error updating reunion-secret-method:', errReunion);
  } else {
    console.log('Reunion-secret-method updated successfully.');
  }

  console.log('Update finished.');
}

updateProducts();
