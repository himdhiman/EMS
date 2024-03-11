import React from 'react'
import "../app/globals.css"
import EventsTable from '@/components/events/EventsTable'
import HomeIcon from "../../public/homeIcon.svg"
import CalenderIcon from "../../public/calenderIcon.svg"
import RoomIcon from "../../public/roomsIcon.svg"
import SettingsIcon from "../../public/settingsIcon.svg"
import FeedbackIcon from "../../public/feedbackIcon.svg"
import HelpIcon from "../../public/helpIcon.svg"
import Image from 'next/image'

const Events = () => {
  return (
    <div className="w-full h-[90rem] relative bg-white flex flex-row items-start justify-start tracking-[normal] mq675:h-auto mq675:min-h-[800]">
      <footer className="w-full !m-[0] absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-[1.25rem] px-[1.5rem] box-border gap-[0rem_0.25rem] max-w-full text-left text-[1rem] text-gray font-inter">
        <div className="h-[55rem] w-[19.188rem] flex flex-col items-start justify-start mq825:hidden">
          <div className="self-stretch flex-1 bg-whitesmoke flex flex-col items-start justify-between p-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-lg leading-[1.5rem] font-bold">
                        Confetti
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem] text-[0.875rem]">
                <div className="self-stretch flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        loading="lazy"
                        alt=""
                        src={HomeIcon}
                      />
                      <div className="absolute top-[-345.5rem] left-[-91.437rem] w-[1.125rem] h-[1.188rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.313rem] font-medium">
                        Dashboard
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-aliceblue flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src={CalenderIcon}
                      />
                      <div className="absolute top-[-348.5rem] left-[-91.437rem] w-[1.125rem] h-[1.25rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.313rem] font-medium">
                        Events
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src={RoomIcon}
                      />
                      <div className="absolute top-[-351.5rem] left-[-91.437rem] w-[1rem] h-[1.063rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.313rem] font-medium">
                        Rooms
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src={SettingsIcon}
                      />
                      <div className="absolute top-[-354.5rem] left-[-91.437rem] w-[1.25rem] h-[1.25rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.313rem] font-medium">
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem_0rem]">
              <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-dodgerblue self-stretch h-[2.5rem] rounded-xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
                <div className="bg-dodgerblue overflow-hidden flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative text-[0.875rem] tracking-[0.21px] leading-[1.313rem] font-inter text-whitesmoke text-left">
                      New event
                    </b>
                  </div>
                </div>
              </button>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
                <div className="self-stretch flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src={FeedbackIcon}
                      />
                      <div className="absolute top-[-383.25rem] left-[-91.437rem] w-[1.375rem] h-[1rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.5rem] font-medium">
                        Feedback
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0.5rem] px-[0.75rem] gap-[0rem_0.75rem]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                      <Image
                        className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src={HelpIcon}
                      />
                      <div className="absolute top-[-386rem] left-[-91.437rem] w-[1.188rem] h-[1.25rem]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.5rem] font-medium">
                        Help and doc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EventsTable />
      </footer>
    </div>
  )
}

export default Events