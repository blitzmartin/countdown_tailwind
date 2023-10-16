import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateTimeLeft = (date: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear(); 
  let targetDate = new Date(`${currentYear}-${date}`)

  if (targetDate <= currentDate) {
    targetDate.setFullYear(currentYear + 1);
  }


  const currentTime = new Date().getTime()
  const timeDifference = targetDate.getTime() - currentTime

  if (timeDifference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}
