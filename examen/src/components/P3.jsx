import { useState, useEffect } from "react"
import "./styles/P3.css"
import logo from "../assets/logo.webp"

export default function P3() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const target = new Date()
      target.setHours(17, 0, 0, 0)

      // Si ya pasaron las 17:00, mostrar 00:00:00
      if (now >= target) {
        return { hours: 0, minutes: 0, seconds: 0 }
      }

      const diff = target - now
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return { hours, minutes, seconds }
    }

    // Actualizar inmediatamente
    setTimeLeft(calculateTimeLeft())

    // Actualizar cada segundo
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (num) => String(num).padStart(2, '0')

  return (
    <div className="p3">
      <img src={logo} alt="Logo" className="logo" />
      
      <div className="cuenta-atras">
        <h2>Tiempo hasta la Merena</h2>
        <div className="tiempo-restante">
          <span className="tiempo-numero">{formatTime(timeLeft.hours)}</span>:
          <span className="tiempo-numero">{formatTime(timeLeft.minutes)}</span>:
          <span className="tiempo-numero">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  )
}