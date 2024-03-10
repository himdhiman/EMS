import Header from '@/components/Header'
import FrameContent from '@/components/rooms/FrameContent'
import RoomsTable from '@/components/rooms/RoomsTable'
import React from 'react'
import "../app/globals.css"

const Rooms = () => {
  return (
    <div className="w-full h-[76.25rem] relative bg-white flex flex-col items-start justify-start tracking-[normal] mq1050:h-auto mq1050:min-h-[1219.5]">
    <main className="w-full !m-[0] absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-whitesmoke flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border gap-[2.25rem_0rem] max-w-full mq750:gap-[2.25rem_0rem]">
      <Header />
      <section className="w-[62.5rem] flex flex-col items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full shrink-0 text-left text-[2rem] text-gray font-inter">
        <div className="w-[20rem] flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[1rem] box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem_0rem]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="relative tracking-[-0.8px] leading-[2.5rem] mq450:text-[1.188rem] mq450:leading-[1.5rem] mq1050:text-[1.625rem] mq1050:leading-[2rem]">
                  Rooms
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-steelblue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative leading-[1.313rem]">
                  Manage all your rooms in one place
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameContent />
        <RoomsTable />
      </section>
    </main>
  </div>
  )
}

export default Rooms