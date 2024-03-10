import React from 'react'

import Search from "../../../public/search.svg"
import Image from 'next/image'

const FrameContent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-[1rem] text-gray font-inter">
      <div className="self-stretch flex flex-col items-start justify-start p-[1rem] box-border max-w-full">
        <div className="self-stretch rounded-xl bg-whitesmoke box-border flex flex-row items-center justify-between py-[1.25rem] px-[1.188rem] max-w-full gap-[1.125rem] border-[1px] border-solid border-gainsboro-200 mq1050:flex-wrap">
          <div className="w-[47.181rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="relative leading-[1.25rem]">
                  Get started with room templates
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] box-border min-h-[3rem] text-steelblue">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[46.938rem] relative leading-[1.5rem] inline-block">
                  Use our room templates to get started quickly. Easily create a
                  room from scratch or use an existing template to get started.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2rem] flex flex-row items-start justify-start text-[0.875rem] text-whitesmoke">
            <div className="self-stretch rounded-xl bg-dodgerblue overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[1rem]">
              <div className="bg-dodgerblue overflow-hidden flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[1.313rem] font-medium">
                    Create room
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border max-w-full">
        <div className="flex-1 rounded-xl bg-aliceblue flex flex-row flex-wrap items-center justify-start py-[0.75rem] px-[1rem] box-border gap-[0rem_0.75rem] max-w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
              <Image
                className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src={Search}
              />
              <div className="absolute top-[-22.125rem] left-[-11.687rem] w-[1.188rem] h-[1.25rem]" />
            </div>
          </div>
          <input
            className="w-[calc(100%_-_56px)] [border:none] [outline:none] bg-[transparent] h-[1.5rem] flex-1 flex flex-col items-start justify-start font-inter text-[1rem] text-steelblue min-w-[18.75rem] max-w-full"
            placeholder="Search by room name"
            type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default FrameContent