import React from 'react'
import { Outlet } from 'react-router-dom'
// import Nav from '../pages/dashboard/components/nav'

function DashboardLayout() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  )
}

export default DashboardLayout
