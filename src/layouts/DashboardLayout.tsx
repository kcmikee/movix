import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import Nav from '../pages/dashboard/components/nav'

function DashboardLayout() {
  const navigate = useNavigate()
  const user = localStorage.getItem('movixAuth')
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  )
}

export default DashboardLayout
