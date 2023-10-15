import { ToRename } from '@/pages/contacts'
import { Home } from '@/pages/home'
import { NotFound } from '@/shared'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'torename',
        element: <ToRename />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
