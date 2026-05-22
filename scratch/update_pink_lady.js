const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updatePinkLady() {
  console.log('Fetching current pink-lady product data...');
  const { data: current, error: fetchErr } = await supabase
    .from('products')
    .select('*')
    .eq('product_id', 'pink-lady')
    .single();

  if (fetchErr) {
    console.error('Error fetching pink-lady:', fetchErr);
    return;
  }

  console.log('Current pink-lady data:', current);

  console.log('Updating pink-lady details...');
  const { data: updated, error: updateErr } = await supabase
    .from('products')
    .update({
      name: '핑크레이디 시크릿 리추얼',
      main_image: '/image/pinklady/p1.webp',
      is_active: true,
      // 혹시 show_on_main 이나 다른 컬럼이 존재할 수 있으니 안전하게 확인 후 업데이트
    })
    .eq('product_id', 'pink-lady')
    .select();

  if (updateErr) {
    console.error('Error updating pink-lady:', updateErr);
    return;
  }

  console.log('Updated pink-lady data:', updated);
}

updatePinkLady();
