import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  // 키보드 접근성
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
      if (event.code === 'Enter') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}