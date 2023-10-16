import { PageContainer } from '@/shared/PageContainer'
import { CountdownTimer } from './components/CountdownTimer'
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/shared'
import { EventType, events } from '@/lib/constants'


export const Home = () => {

  const [targetEvent, setTargetEvent] = useState<string>('')

  return (
    <PageContainer title="HOW MANY DAYS">
      <div className="flex flex-col gap-10">
      <div className="flex justify-start gap-2 items-center">
        <h2 className="text-xl font-semibold text-accent">Days until </h2>
        <span>
          <Select onValueChange={(value) => setTargetEvent(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="(select event)" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {events.map((event) => (<SelectItem value={event.value}>{event.label}</SelectItem>))}             
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
     
      </div>
        <CountdownTimer targetDate={targetEvent} />
      </div>
    </PageContainer>
  )
}
