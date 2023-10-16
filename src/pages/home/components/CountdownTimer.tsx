import { calculateTimeLeft } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const CountdownTimer = ({
  targetDate
}: {
  targetDate: string
}) => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const { days, hours, minutes, seconds } = timeLeft
  let customDays;
  let centinaia;
  if(days > 99) {
    centinaia = Math.floor(days / 100);
    const decineUnità = days % 100;
    customDays = decineUnità
  } else {
    customDays = days
  }

  const centinaiaStyle = {
    '--value': centinaia
  } as React.CSSProperties

  const daysStyle = {
    '--value': customDays
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
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center gap-4 ">
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center text-primary">
          <div className="flex flex-col">
            <span className="countdown font-mono text-8xl">
              {days >99 && ( <span style={centinaiaStyle}></span>)}
              <span style={daysStyle}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-8xl">
              <span style={hoursStyle}></span>
            </span>
            hours
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
    </div>
  )
}
