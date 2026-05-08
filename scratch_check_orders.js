const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkOrdersColumns() {
  // 실제 데이터를 하나 가져와서 어떤 컬럼들이 있는지 확인
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching orders:', error);
    return;
  }

  if (data && data.length > 0) {
    console.log('--- Orders Table Columns ---');
    console.log(Object.keys(data[0]).join(', '));
  } else {
    console.log('Orders table is empty, cannot infer columns from data.');
  }
}

checkOrdersColumns();
