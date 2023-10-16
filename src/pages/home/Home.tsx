import { PageContainer } from '@/shared/PageContainer'
import { CountdownTimer } from './components/CountdownTimer'
import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/shared'
import { EventType, events } from '@/lib/constants'


export const Home = () => {

  const [event, setEvent] = useState<EventType>(events[0])
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const formattedYear = currentYear.toString();

  return (
    <PageContainer title="HOW MANY DAYS">
      <div className="flex flex-col gap-10">
      <div className="flex justify-start gap-2 items-center">
        <h2 className="text-xl font-semibold text-accent">Days until </h2>
        <span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="select event" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Events</SelectLabel>
                {

                }
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
     
      </div>
        <CountdownTimer
          targetDate={`${formattedYear}-${event.value}T00:00:00`}
          description="My birthday so that you know"
        />
      </div>
    </PageContainer>
  )
}
