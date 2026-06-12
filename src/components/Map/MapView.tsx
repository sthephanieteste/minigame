import React, { useEffect, useRef, useState } from 'react'
import { useLocations } from '@/hooks/useLocations'
import { motion } from 'framer-motion'

export default function MapView() {
  const { locations, loading } = useLocations()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current || locations.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to parent container
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas with gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#0a0e27')
    gradient.addColorStop(1, '#1a1f3a')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw simple background shapes
    ctx.fillStyle = 'rgba(76, 205, 196, 0.1)'
    ctx.beginPath()
    ctx.arc(100, 100, 150, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = 'rgba(212, 175, 55, 0.1)'
    ctx.beginPath()
    ctx.arc(canvas.width - 100, canvas.height - 100, 150, 0, Math.PI * 2)
    ctx.fill()

    // Draw locations as circles
    locations.forEach((location) => {
      const x = (location.x / 100) * canvas.width
      const y = (location.y / 100) * canvas.height

      // Draw location circle
      ctx.fillStyle = location.type === 'future' ? 'rgba(100, 100, 100, 0.5)' : 'rgba(212, 175, 55, 0.3)'
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.fill()

      // Draw border
      ctx.strokeStyle = location.type === 'special' ? '#ff6b9d' : '#d4af37'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.stroke()

      // Draw icon
      ctx.font = '20px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#fff'
      ctx.fillText(location.icon, x, y)
    })
  }, [locations])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    locations.forEach((location) => {
      const locX = (location.x / 100) * canvas.width
      const locY = (location.y / 100) * canvas.height

      const distance = Math.sqrt((x - locX) ** 2 + (y - locY) ** 2)
      if (distance < 30) {
        setSelectedLocation(location.id)
      }
    })
  }

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Carregando mapa...</div>
  }

  return (
    <div className="w-full h-full flex flex-col">
      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-full cursor-pointer"
        />
      </motion.div>

      {selectedLocation && (
        <motion.div
          className="p-4 bg-dark-secondary/90 border-t border-accent-gold/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <p className="text-accent-gold text-sm">
            Selecionado: {locations.find((l) => l.id === selectedLocation)?.name}
          </p>
        </motion.div>
      )}
    </div>
  )
}
