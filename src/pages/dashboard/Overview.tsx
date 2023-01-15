/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import {
  useFeauturedQuery,
  useGetNewArrivalQuery
} from '../../store/movies/movieApi'
import Banner from './components/banner'
import Nav from './components/nav'
import Sectionrow from './components/sectionrow'

function Overview() {
  const { isFetching, isLoading, isSuccess } = useGetNewArrivalQuery('')
  const { isFetching: featuredFetching } = useFeauturedQuery('')
  const { newArrival, feautured } = useSelector((state: any) => state.movie)

  console.log({ newArrival, feautured })
  return (
    <div className="h-[100%] w-full">
      <Nav />
      <Banner />
      <div className="w-[93%] mx-auto pb-10 space-y-10">
        <Sectionrow
          cardTitle="Top Rated"
          sectionTitle="Featured Movie"
          data={feautured}
          mt={'mt-[70px]'}
        />
        <Sectionrow
          cardTitle="Originals"
          sectionTitle="New Arrival"
          data={newArrival}
          mt={'mt-[70px]'}
        />
      </div>
    </div>
  )
}

export default Overview
