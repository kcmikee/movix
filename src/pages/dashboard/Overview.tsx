/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Banner from './components/banner'
import Nav from './components/nav'
import Sectionrow from './components/sectionrow'

function Overview() {
  return (
    <div className="h-[100%] w-full">
      <Nav />
      <Banner />
      <div className="w-[90%] mx-auto pb-10 space-y-10">
        <Sectionrow
          sectionTitle="Featured Movie"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          mt={'mt-[70px]'}
        />
        <Sectionrow
          sectionTitle="New Arrival"
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          mt={'mt-[70px]'}
        />
      </div>
    </div>
  )
}

export default Overview
