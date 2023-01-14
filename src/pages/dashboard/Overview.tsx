/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Banner from './components/banner'
import Nav from './components/nav'

function Overview() {
  return (
    <div className="h-[100%] w-full">
      <Nav />
      <Banner />
    </div>
  )
}

export default Overview
