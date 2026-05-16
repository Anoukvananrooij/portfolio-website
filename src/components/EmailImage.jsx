import { useRef, useEffect } from 'react'

// Renders text as a canvas image so it never appears as selectable/scrapeable HTML text.
// Pass `parts` as an array — they are joined at runtime.
export default function ObfuscatedText({ parts, color = '#6f7475', fontSize = 15 }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const text = parts.join('')
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const font = `${fontSize}px Avenir, "Avenir Next", "Helvetica Neue", Arial, sans-serif`
    ctx.font = font
    const w = Math.ceil(ctx.measureText(text).width) + 4
    canvas.width = w
    canvas.height = fontSize + 8
    ctx.font = font
    ctx.fillStyle = color
    ctx.fillText(text, 2, fontSize)
    if (imgRef.current) imgRef.current.src = canvas.toDataURL()
  }, [parts, color, fontSize])

  return (
    <img
      ref={imgRef}
      alt=""
      aria-hidden="true"
      style={{ height: '1em', verticalAlign: 'middle', userSelect: 'none', pointerEvents: 'none' }}
      draggable={false}
    />
  )
}
