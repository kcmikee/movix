import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import strangerthings from '../../../assets/images/dashboard/strangerthings.png'
import imdb from '../../../assets/images/dashboard/IMDB.png'
import rotten from '../../../assets/images/dashboard/rotten.png'
import 'swiper/css'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import styled from 'styled-components'
import { Heart } from '@styled-icons/foundation/Heart'

interface IProps {
  sectionTitle: string
  data: any
  mt?: string
}

function Sectionrow({
  sectionTitle,
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  mt
}: IProps) {
  const slides = []

  slides.push(
    data.map((item: any, key: number) => (
      <SwiperSlide key={key}>
        <div className="w-[170px] h-[490px] ">
          <img
            src={strangerthings}
            className="w-full h-[250px] bg-red-400 object-fill"
          />
          <p className="text-sm text-[#9ca3af] font-bold my-3">
            USA, 2016 - Current
          </p>
          <h2 className="text-lg text-[#111827] font-bold">Stranger Things</h2>
          <div className="my-5 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <img src={imdb} className="w-[35px]" alt="imdb" />{' '}
              <p className="text-xs text-[#111827] font-light">8.6/10</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={rotten} className="w-4" alt="imdb" />{' '}
              <p className="text-xs text-[#111827] font-light">97%</p>
            </div>
          </div>
          <p>Action, Adventure, Horror</p>
        </div>
      </SwiperSlide>
    ))
  )

  const sliderRef = React.useRef<any>(null)

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])
  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  console.log({ slides })
  return (
    <div className={`${mt ? mt : 'mt-14'} `}>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl mb-[44px] font-medium font-[Dm Sans] ml-10">
          {sectionTitle}
        </h2>
        <div className="flex items-center gap-1">
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
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={false}
        >
          {data.map((item: any, key: number) => (
            <SwiperSlide key={key} style={{ width: '245px', height: '500px' }}>
              <div className="w-[245px] h-full">
                <img
                  src={strangerthings}
                  className="w-full h-[370px]  object-contain"
                />
                <p className="text-sm text-[#9ca3af] font-medium">
                  USA, 2016 - Current
                </p>
                <h2 className="text-lg text-[#111827] font-bold">
                  Stranger Things
                </h2>
                <div className="my-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={imdb} className="w-[35px]" alt="imdb" />{' '}
                    <p className="text-xs text-[#111827] font-light">8.6/10</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={rotten} className="w-4" alt="imdb" />{' '}
                    <p className="text-xs text-[#111827] font-light">97%</p>
                  </div>
                </div>
                <p className="text-[#9CA3AF] text-xs">
                  Action, Adventure, Horror
                </p>
              </div>
              {key === 0 && (
                <div className="absolute top-5 left-4">
                  <Genre>
                    <p className="text-[#111827]">hello</p>
                  </Genre>
                </div>
              )}
              <div className="absolute top-5 right-14">
                <Fav>
                  <Heart size={20} color={'#D1D5DB'} />
                </Fav>
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

export default Sectionrow

const Genre = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  width: 74px;
  height: 22px;
  background: rgba(243, 244, 246, 0.5);
  backdrop-filter: blur(1px);
  border-radius: 12px;
`

const Fav = styled.div`
  width: 30px;
  height: 29.21px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: rgba(243, 244, 246, 0.5);
  backdrop-filter: blur(1px);
`
