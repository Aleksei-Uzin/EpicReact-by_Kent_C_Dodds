import { useState, useEffect } from 'react'

export const BrowserEvent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: -20,
        left: -20,
        width: 40,
        height: 40,
      }}
    />
  )
}
