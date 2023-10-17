import { PageContainer } from '@/shared/PageContainer'
import { CountdownTimer } from './components/CountdownTimer'
import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/shared'
import { events } from '@/lib/constants'


export const Home = () => {

  const [targetEvent, setTargetEvent] = useState<string |null>(null)

  return (
    <PageContainer title="HOW MANY DAYS" className='p-12'>
      <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-start gap-1 items-center">
        <h2 className="text-xl font-semibold text-accent">Days until </h2>
        <span>
          <Select onValueChange={(value) => setTargetEvent(value)}>
            <SelectTrigger>
              <SelectValue placeholder="(select event)" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {events.map((event) => (<SelectItem key={event.value} value={event.value}>{event.label}</SelectItem>))}             
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
