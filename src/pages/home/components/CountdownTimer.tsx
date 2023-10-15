import { calculateTimeLeft } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const CountdownTimer = () => {
  // Target date: October 1st, 2023, at midnight (00:00:00)
  const targetDate = '2023-11-03T00:00:00'

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { days, hours, minutes, seconds } = timeLeft

  const daysStyle = {
    '--value': days
  } as React.CSSProperties

  const hoursStyle = {
    '--value': hours
  } as React.CSSProperties

  const minuteStyle = {
    '--value': minutes
  } as React.CSSProperties

  const secondsStyle = {
    '--value': seconds
  } as React.CSSProperties

  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center text-primary">
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={daysStyle}></span>
          </span>
          giorni
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={hoursStyle}></span>
          </span>
          ore
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={minuteStyle}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={secondsStyle}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  )
}
