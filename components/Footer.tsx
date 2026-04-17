export default function Footer() {
  return (
    <footer 
      className="py-16 px-6 relative z-10" 
      style={{ 
        background: 'transparent',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
      }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-elegant font-bold mb-3 text-[#F5F5F5] tracking-widest">
              백도화 매력학당
            </h3>
            <p className="text-[#EDE6DA] opacity-60 text-sm md:text-base leading-relaxed">
              선천코드 분석 기반 연애·풍요 솔루션으로 여러분을 초대합니다
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-2xl transition-all duration-300 text-[#D4AF37] hover:scale-110 hover:brightness-125">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-2xl transition-all duration-300 text-[#D4AF37] hover:scale-110 hover:brightness-125">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl transition-all duration-300 text-[#D4AF37] hover:scale-110 hover:brightness-125">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center text-[#EDE6DA] opacity-30 text-xs tracking-widest border-t border-[rgba(212,175,55,0.05)]">
          <p>&copy; 2024 백도화 매력학당. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

