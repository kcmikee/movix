import { ReactElement } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import RootLayout from './layouts/RootLayout'
import Login from './pages/auth/login'
import Overview from './pages/dashboard/Overview'
import SignUp from './pages/auth/signUp'

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="Home" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
        </Route>
      </Route>
    )
  )
  return (
    // <div className="border border-gray-50 rounded-xl p-20 shadow-xl">
    <RouterProvider router={router} />
    // </div>
  )
}

export default App
