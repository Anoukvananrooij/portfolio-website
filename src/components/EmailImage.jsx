import { useRef, useEffect } from 'react'

// Renders text as a canvas image so it never appears as selectable/scrapeable HTML text.
export default function ObfuscatedText({ parts, color = '#6f7475', fontSize = 16 }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const text = parts.join('')
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const font = `${fontSize}px Avenir, "Avenir Next", "Helvetica Neue", Arial, sans-serif`
    ctx.font = font
    const w = Math.ceil(ctx.measureText(text).width) + 2
    canvas.width = w
    canvas.height = fontSize + 4
    ctx.font = font
    ctx.fillStyle = color
    ctx.textBaseline = 'top'
    ctx.fillText(text, 0, 2)
    if (imgRef.current) imgRef.current.src = canvas.toDataURL()
  }, [parts, color, fontSize])

  return (
    <img
      ref={imgRef}
      alt=""
      aria-hidden="true"
      style={{ display: 'block', height: `${fontSize + 4}px`, userSelect: 'none', pointerEvents: 'none' }}
      draggable={false}
    />
  )
}
