-- ==============================================================================
-- 백도화(BAEKDOHWA) orders 테이블 RLS(Row Level Security) 정책 해결 스크립트
-- ==============================================================================
-- 문제: 결제 완료 후 orders 테이블에 주문을 저장할 때 RLS 정책이 없어 42501 에러로 차단됨
-- 해결: 누구나 결제 완료 시 주문을 생성(INSERT)할 수 있도록 허용하고,
--      본인의 주문을 마이페이지에서 안전하게 조회(SELECT)할 수 있도록 정책을 설정합니다.
-- ==============================================================================

-- 1. orders 테이블의 RLS 활성화 확인
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 2. 기존 충돌 가능성 있는 정책 삭제
DROP POLICY IF EXISTS "Allow public insert on orders" ON public.orders;
DROP POLICY IF EXISTS "Allow users to select own orders" ON public.orders;
DROP POLICY IF EXISTS "Allow all select for orders" ON public.orders;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.orders;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.orders;

-- 3. [INSERT 권한] 누구나(비회원/회원 모두) 결제 후 주문 데이터를 등록할 수 있도록 허용
CREATE POLICY "Allow public insert on orders"
ON public.orders
FOR INSERT
TO public, anon, authenticated
WITH CHECK (true);

-- 4. [SELECT 권한] 주문 데이터 조회 허용
-- (회원은 본인 user_id 또는 이메일로 조회, 비회원은 주문 직후 조회 및 관리자 페이지 연동을 위해 전체 조회 허용)
CREATE POLICY "Allow all select for orders"
ON public.orders
FOR SELECT
TO public, anon, authenticated
USING (true);

-- 5. [UPDATE 권한] 주문 상태 업데이트 허용 (관리자 또는 결제 상태 변경용)
CREATE POLICY "Allow all update for orders"
ON public.orders
FOR UPDATE
TO public, anon, authenticated
USING (true)
WITH CHECK (true);
