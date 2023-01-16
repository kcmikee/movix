import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import styled from 'styled-components'
import { PlayCircleOutline } from '@styled-icons/evaicons-outline/PlayCircleOutline'

interface IProps {
  data: any
  mt?: string
}

function VideoRow({
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  mt
}: IProps) {
  const sliderRef = React.useRef<any>(null)

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])
  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  //   console.log({ slides })
  return (
    <div className={`${mt ? mt : 'mt-14'} `}>
      <div className="flex items-center justify-between mb-[20px] md:mb-[44px]">
        <h2 className="text-xl md:text-4xl  font-medium font-[Dm Sans] ml-10">
          Exclusive Videos
        </h2>
        <div className="flex items-center gap-1 md:mr-[1.2rem] cursor-pointer">
          <p className="text-red-600 text-lg">See more</p>
          <ChevronRight size={24} color="red" />
        </div>
      </div>
      <div className="flex items-center">
        <button className="handle mr-5" id="leftBtn" onClick={handlePrev}>
          <p className="text-6xl font-thin">‹</p>
        </button>

        <Swiper
          className="flex items-center"
          ref={sliderRef}
          slidesPerView={2}
          spaceBetween={30}
          // loop={true}
          // loopFillGroupWithBlank={true}
          navigation={false}
        >
          {data.map((item: any, key: number) => (
            <SwiperSlide
              key={key}
              style={{
                cursor: 'pointer',
                position: 'relative'

                // backgroundColor: 'black'
              }}
              className="min-w-[250px] max-w-[450px]"
            >
              <div className="min-w-[250px] max-w-[450px] h-[288px]">
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                  className="w-full h-[254px]"
                />
                <p className="text-sm text-[#000000] mt-3 font-medium">
                  {item.name}
                </p>
              </div>
              <div className="absolute top-[35%] left-[50%]">
                <PlayCircleOutline size={50} color="#fff" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="handle ml-1" id="rightBtn" onClick={handleNext}>
          <p className="text-6xl font-thin">›</p>
        </button>
      </div>
    </div>
  )
}

export default VideoRow
