import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import fetchedImgSrc from '../../../assets/images/dashboard/Poster.png'
import imdb from '../../../assets/images/dashboard/IMDB.png'
import rotten from '../../../assets/images/dashboard/rotten.png'
import { PlayCircle } from '@styled-icons/material/PlayCircle'
import styled from 'styled-components'

function Banner() {
  const pagination = {
    clickable: true
  }
  return (
    <div className="h-[73%] bg-black">
      <Swiper
        direction={'vertical'}
        pagination={pagination}
        modules={[Pagination]}
        className="h-[100%] w-full"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url(${fetchedImgSrc})`,
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '0 6%'
          }}
        >
          <div className="absolute top-[30%] w-[404px]">
            <h1 className="text-white font-bold text-5xl leading-tight">
              John Wick 3 : Parabellum
            </h1>
            <div className="my-5 flex items-center gap-3">
              <div className="flex items-center gap-3">
                <img src={imdb} className="w-[35px]" alt="imdb" />{' '}
                <p className="text-white">8.6/10</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={rotten} className="w-4" alt="imdb" />{' '}
                <p className="text-white">97%</p>
              </div>
            </div>
            <div>
              <p className="text-white">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <Watch className="hover:bg-rose-500 cursor-pointer">
              <PlayCircle size={25} color="#fff" />
              <p className="font-bold text-white text-sm">Watch trailer</p>
            </Watch>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner

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
