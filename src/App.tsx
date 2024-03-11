import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Networks } from './pages/networks'

import { PrivateRoute } from './routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  { 
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <PrivateRoute><Admin/></PrivateRoute> 
    
  },
  {
    path: '/admin/social',
    element: <PrivateRoute><Networks/></PrivateRoute>
  }
])

export { router }