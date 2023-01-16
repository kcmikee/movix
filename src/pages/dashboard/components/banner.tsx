import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import imdb from '../../../assets/images/dashboard/IMDB.png'
import rotten from '../../../assets/images/dashboard/rotten.png'
import { PlayCircle } from '@styled-icons/material/PlayCircle'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

function Banner() {
  const { feautured } = useSelector((state: any) => state.movie)
  const pagination = {
    clickable: true
  }

  return (
    <div className="h-[71%] md:h-[73%] bg-black">
      <Swiper
        direction={'vertical'}
        pagination={pagination}
        modules={[Pagination]}
        className="h-[100%] w-full -mt-4 md:-mt-0"
      >
        {feautured.slice(4, 10).map((movie: any, _key: number) => (
          <Hero
            key={_key}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}
          >
            <div className="absolute top-[30%] w-[404px]">
              <h1 className="text-white font-bold text-5xl leading-tight">
                {movie.name}
              </h1>
              <div className="my-5 flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <img src={imdb} className="w-[35px]" alt="imdb" />{' '}
                  <p className="text-white">{movie.vote_average}</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={rotten} className="w-4" alt="imdb" />{' '}
                  <p className="text-white">97%</p>
                </div>
              </div>
              <div>
                <p className="text-white">{movie.overview}</p>
              </div>
              <Watch className="hover:bg-rose-500 cursor-pointer">
                <PlayCircle size={25} color="#fff" />
                <p className="font-bold text-white text-sm">Watch trailer</p>
              </Watch>
            </div>
          </Hero>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner

const Hero = styled(SwiperSlide)`
  background-size: 100%;
  background-position-x: center;
  background-position-y: -38rem;
  background-repeat: no-repeat;
  padding: 0 6%;
  @media only screen and (max-width: 768px) {
    background-position-x: left;
    background-position-y: 1rem;
  }
`

const Watch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
  margin-top: 16px;
  width: 169px;
  height: 36px;
  background: #be123c;
  border-radius: 6px;
`
