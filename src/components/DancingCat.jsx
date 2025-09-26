import { useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

const DancingCat = () => {
  const { isAnimating, toggleAnimation, startAnimation, stopAnimation } = useAnimation()

  // 컴포넌트 마운트 시 웰컴 메시지
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('🐱 고양이 댄싱 페이지에 오신 것을 환영합니다!')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat ${isAnimating ? 'dancing' : ''}`}
        onClick={toggleAnimation}
        role="button"
        tabIndex={0}
        aria-label="고양이를 클릭하여 댄스 시작/중지"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleAnimation()
          }
        }}
      >
        <img src={catSvg} alt="주황색 고양이 캐릭터" />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className={`control-btn ${isAnimating ? 'stop' : 'start'}`}
          aria-label={isAnimating ? '댄스 중지하기' : '댄스 시작하기'}
        >
          {isAnimating ? '멈추기' : '춤추기'} 🎵
        </button>

        <div className="advanced-controls">
          <button
            onClick={startAnimation}
            className="mini-btn start-btn"
            disabled={isAnimating}
            aria-label="댄스 시작"
          >
            ▶️
          </button>
          <button
            onClick={stopAnimation}
            className="mini-btn stop-btn"
            disabled={!isAnimating}
            aria-label="댄스 중지"
          >
            ⏸️
          </button>
        </div>
      </div>

      <div className="instructions">
        <p>고양이를 클릭하거나 버튼을 눌러 댄스를 시작하세요!</p>
        <p className="keyboard-hint">⌨️ 스페이스바나 엔터키로도 제어 가능합니다</p>
      </div>

      {isAnimating && (
        <div className="dancing-indicator" aria-live="polite">
          🎶 고양이가 춤추고 있어요!
        </div>
      )}
    </div>
  )
}

export default DancingCat