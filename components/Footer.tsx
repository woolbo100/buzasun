export default function Footer() {
  return (
    <footer 
      className="py-12 px-6 relative z-10" 
      style={{ 
        background: 'linear-gradient(135deg, #120014 0%, #1a0626 30%, #2d0a20 60%, #1a0626 100%)',
        backgroundSize: '200% 200%',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Hero와 동일한 오버레이 */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 20, 147, 0.06) 0%, transparent 50%)',
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-elegant font-bold gradient-text mb-2">
              백도화 매력학당
            </h3>
            <p className="text-gray-400">
              선천코드 분석 기반 연애·풍요 솔루션으로 여러분을 초대합니다
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors" style={{ color: '#ff69b4' }}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors" style={{ color: '#ff69b4' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors" style={{ color: '#ff69b4' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl transition-colors" style={{ color: '#ff69b4' }}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-gray-400" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p>&copy; 2024 백도화 매력학당. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
