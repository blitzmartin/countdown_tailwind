import { PageContainer } from '@/shared/PageContainer'
import { Link } from 'react-router-dom'
import { CountdownTimer } from './components/CountdownTimer'

export const Home = () => {
  return (
    <PageContainer title="SCARY COUNTERS">
      <div className="flex flex-col gap-10">
        <CountdownTimer
          targetDate="2023-11-03T00:00:00"
          description="Tipping point"
        />
        <CountdownTimer
          targetDate="2024-01-02T00:00:00"
          description="My birthday so that you know"
        />
        <div className="flex justify-center">
          <p className="text-sm">
            Are you afraid and want to take action? Then wait no more and click{' '}
            <Link to={'/torename'} className="text-primary">
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </PageContainer>
  )
}
