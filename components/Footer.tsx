export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: 'rgba(26, 6, 38, 0.6)', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255, 20, 147, 0.1)' }}>
      <div className="container mx-auto max-w-6xl">
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
        <div className="mt-8 pt-8 text-center text-gray-400" style={{ borderTop: '1px solid rgba(255, 20, 147, 0.2)' }}>
          <p>&copy; 2024 백도화 매력학당. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
