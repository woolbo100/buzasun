import { createClient } from '@supabase/supabase-js';

// .env.local에 저장한 주소와 키를 가져옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// 프로젝트 어디서든 사용할 수 있는 Supabase 연결 도구(클라이언트)를 만듭니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
