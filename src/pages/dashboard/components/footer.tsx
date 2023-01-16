import React from 'react'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'

function Footer() {
  const socials = [
    { id: 1, icon: <Facebook size={23} color="#000" /> },
    { id: 2, icon: <Instagram size={23} color="#000" /> },
    { id: 3, icon: <Twitter size={23} color="#000" /> },
    { id: 4, icon: <Youtube size={23} color="#000" /> }
  ]
  const links = ['Conditions of Use', 'Privacy & Policy', 'Press Room']
  return (
    <div className="mt-10 md:mt-[120px]">
      <div className="flex items-center justify-center">
        {socials.map((social, key) => (
          <div
            key={key}
            className={
              key === socials.length - 1
                ? ' cursor-pointer'
                : 'mr-3 md:mr-[48px] cursor-pointer'
            }
          >
            {social.icon}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center justify-center">
          {links.map((link, key) => (
            <p
              key={key}
              className={
                key === links.length - 1
                  ? ' cursor-pointer'
                  : 'mr-3 md:mr-[48px] cursor-pointer'
              }
            >
              {link}
            </p>
          ))}
        </div>
      </div>
      <p className="text-center text-sm font-light mt-6">© 2021 Movix</p>
    </div>
  )
}

export default Footer
