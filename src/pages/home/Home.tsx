import { PageContainer } from '@/shared/PageContainer'
import { CountdownTimer } from './components/CountdownTimer'
import { useState } from 'react'

export const Home = () => {
  const [event, setEvent] = useState('')
  return (
    <PageContainer title="HOW MANY DAYS">
      <div className="flex flex-col gap-10">
      <div className="flex justify-start">
        <h2 className="text-xl font-semibold text-accent">Days until {event}:</h2>
      </div>
        <CountdownTimer
          targetDate="2024-01-02T00:00:00"
          description="My birthday so that you know"
        />
      </div>
    </PageContainer>
  )
}
