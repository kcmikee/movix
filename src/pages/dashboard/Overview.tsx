/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import {
  useFeauturedQuery,
  useGetNewArrivalQuery,
  useGetPeopleQuery
} from '../../store/movies/movieApi'
import Banner from './components/banner'
import Footer from './components/footer'
import Nav from './components/nav'
import PeopleRow from './components/peopleRow'
import Sectionrow from './components/sectionrow'
import VideoRow from './components/VideoRow'

function Overview() {
  const { isFetching, isLoading, isSuccess } = useGetNewArrivalQuery('')
  const { isFetching: featuredFetching } = useFeauturedQuery('')
  const { isFetching: peoplesFetching } = useGetPeopleQuery('')
  const { newArrival, feautured, people } = useSelector(
    (state: any) => state.movie
  )

  // console.log({ newArrival, feautured, people })
  return (
    <div className="h-[100%] w-full">
      <Nav />
      <Banner />
      <div className="w-[100%] md:w-[93%] mx-auto pb-10 space-y-10">
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
        <VideoRow data={newArrival} mt={'mt-[70px]'} />
        <PeopleRow data={people} mt={'mt-[70px]'} />
        <Footer />
      </div>
    </div>
  )
}

export default Overview
