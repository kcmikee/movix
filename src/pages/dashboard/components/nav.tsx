import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tv from '../../../assets/images/dashboard/tv.png'
import Search from '../../../components/common/Search'

function Nav() {
  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // eslint-disable-next-line prefer-const
  return (
    <Container
      className={`${scrolled ? 'bg-[rgb(20,20,20)]' : 'bg-transparent'}`}
    >
      <section>
        <div className="flex items-center gap-4">
          <img src={Tv} alt="logo" className="h-[50px] w-[50px]" />
          <h2 className="font-bold text-2xl">Movix</h2>
        </div>
        <div>
          <Search
            type="search"
            width="525px"
            holder="What do you want to watch?"
          />
        </div>
        <div className="flex items-center gap-4">
          <p>Michael</p>
          <div className="w-9 h-9 bg-rose-700 rounded-full flex flex-col gap-[5px] justify-center items-center">
            <div className="bg-white w-[65%] h-[3px] rounded-lg"></div>
            <div className="bg-white w-[65%] h-[3px] rounded-lg"></div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Nav

const Container = styled.nav`
  // margin-top: 20px;
  color: #fff;
  height: 8vh;
  width: 100vw;
  position: fixed;
  z-index: 10;
  font-size: 0.9rem;
  section {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
  }
`
