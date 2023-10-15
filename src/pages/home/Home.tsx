import { PageContainer } from '@/shared/PageContainer'
import { Link } from 'react-router-dom'
import { CountdownTimer } from './components/CountdownTimer'

export const Home = () => {
  return (
    <PageContainer title="">
      <div className="flex justify-center">
        <h2 className="text-xl font-semibold">
          Questo libro sarà autopubblicato in:
        </h2>
      </div>
      <CountdownTimer />
      <div className="flex justify-center">
        <p className="text-sm">
          Casa editrice? Se sei interessato all&apos;opera e vuoi interrompere
          questo countdown clicca{' '}
          <Link to={'/torename'} className="text-primary">
            qui
          </Link>
          .
        </p>
      </div>
    </PageContainer>
  )
}
