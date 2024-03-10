import Image from 'next/image'
import React from 'react'

import logo from "../../public/logo.svg"
import search from "../../public/search.svg"
import notification from "../../public/notification.svg"

const Header = () => {
  return (
    <header className="self-stretch box-border flex flex-row items-center justify-between py-[0.75rem] px-[5rem] top-[0] z-[99] sticky max-w-full gap-[0rem] [row-gap:20px] text-left text-[1.125rem] text-gray font-inter border-b-[1px] border-solid border-gainsboro-100">
      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[0rem_0.931rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0">
              <Image
                className="absolute top-[0rem] left-[0rem] w-[1rem] h-[1rem]"
                loading="lazy"
                alt=""
                src={logo}
              />
              <div className="absolute top-[-1.156rem] left-[-2.187rem] w-[0.875rem] h-[0.875rem]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <b className="relative tracking-[-0.27px] leading-[1.406rem] whitespace-nowrap">
                Confetti
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2.5rem] w-[68.631rem] flex flex-row items-start justify-end gap-[0rem_2rem] max-w-full lg:w-[50.856rem] mq750:gap-[0rem_2rem]">
        <nav className="m-0 self-stretch w-[17.775rem] flex flex-row items-center justify-between gap-[1.25rem] text-left text-[0.875rem] text-gray font-inter lg:hidden">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.313rem] font-medium">
                Home
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.313rem] font-medium">
                Events
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.313rem] font-medium">
                Rooms
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.313rem] font-medium">
                People
              </div>
            </div>
          </div>
        </nav>
        <div className="flex flex-row items-start justify-start gap-[0rem_0.5rem]">
          <div className="rounded-xl bg-aliceblue flex flex-row items-center justify-center p-[0.625rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0">
                <Image
                  className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src={search}
                />
                <div className="absolute top-[-1.031rem] left-[-67.812rem] w-[1rem] h-[1rem]" />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-aliceblue flex flex-row items-center justify-center p-[0.625rem]">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0">
                <Image
                  className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src={notification}
                />
                <div className="absolute top-[-1.031rem] left-[-70.812rem] w-[0.938rem] h-[1rem]" />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="h-[2.5rem] w-[2.5rem] relative rounded-xl overflow-hidden shrink-0 object-cover min-h-[2.5rem]"
          loading="lazy"
          alt=""
          src={notification}
        />
      </div>
    </header>
  )
}

export default Header