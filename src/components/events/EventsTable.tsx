import React from "react";
import TableRow from "./TableRow";
import SearchIcon from "../../../public/search.svg";
import Image from "next/image";

const EventsTable = () => {
  return (
    <section className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border w-[75vw] text-left text-[2rem] text-gray font-inter mq825:w-screen">
      <div className="self-stretch flex flex-col items-end justify-start gap-[1rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.938rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq675:flex-wrap">
            <div className="w-[18rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 relative text-inherit tracking-[-0.8px] leading-[2.5rem] font-bold font-inherit mq825:text-[1.625rem] mq825:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    Events
                  </h1>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0.344rem] px-[1rem] bg-aliceblue rounded-xl overflow-hidden flex flex-row items-center justify-center">
              <div className="bg-aliceblue overflow-hidden flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative text-[0.875rem] leading-[1.313rem] font-medium font-inter text-gray text-left">
                    New event
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[0.875rem] text-steelblue">
          <div className="self-stretch flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border max-w-full">
            <div className="flex-1 rounded-xl bg-aliceblue flex flex-row flex-wrap items-center justify-start py-[0.75rem] px-[1rem] box-border gap-[0rem_0.75rem] max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
                  <Image
                    className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                    alt=""
                    src={SearchIcon}
                  />
                  <div className="absolute top-[-347.5rem] left-[-111.125rem] w-[1.188rem] h-[1.25rem]" />
                </div>
              </div>
              <input
                className="w-[calc(100%_-_56px)] [border:none] [outline:none] bg-[transparent] h-[1.5rem] flex-1 flex flex-col items-start justify-start font-inter text-[1rem] text-steelblue min-w-[18.75rem] max-w-full"
                placeholder="Search events"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
            <div className="self-stretch flex-1 rounded-xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <nav className="m-0 self-stretch bg-whitesmoke flex flex-row items-start justify-start text-left text-[0.875rem] text-gray font-inter">
                    <div className="flex-1 flex flex-col items-start justify-start py-[0.75rem] px-[1rem]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          Event
                        </div>
                      </div>
                    </div>
                    <div className="w-[8.25rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          Type
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.438rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          When
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.75rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          Where
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.813rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          Who
                        </div>
                      </div>
                    </div>
                    <div className="w-[7.875rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          How
                        </div>
                      </div>
                    </div>
                    <div className="w-[6.188rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[1.313rem] font-medium">
                          Action
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="self-stretch overflow-y-scroll items-start justify-start flex-1 flex flex-col max-w-full">
                  <TableRow
                    name="Design review"
                    timing="10:00 AM - 11:00 AM"
                    place="Room 1"
                    people="12 people"
                    mode="Google Meet"
                  />
                  <TableRow
                    name="Sprint planning"
                    timing="12:00 PM - 1:00 PM"
                    place="Room 2"
                    people="6 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="User research"
                    timing="2:00 PM - 3:00 PM"
                    place="Room 3"
                    people="8 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="Demo"
                    timing="4:00 PM - 5:00 PM"
                    place="Room 4"
                    people="10 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="Retrospective"
                    timing="6:00 PM - 7:00 PM"
                    place="Room 5"
                    people="5 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />

                  <TableRow
                    name="Design review"
                    timing="10:00 AM - 11:00 AM"
                    place="Room 1"
                    people="12 people"
                    mode="Google Meet"
                  />
                  <TableRow
                    name="Sprint planning"
                    timing="12:00 PM - 1:00 PM"
                    place="Room 2"
                    people="6 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="User research"
                    timing="2:00 PM - 3:00 PM"
                    place="Room 3"
                    people="8 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="Demo"
                    timing="4:00 PM - 5:00 PM"
                    place="Room 4"
                    people="10 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="Retrospective"
                    timing="6:00 PM - 7:00 PM"
                    place="Room 5"
                    people="5 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="User research"
                    timing="2:00 PM - 3:00 PM"
                    place="Room 3"
                    people="8 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="Demo"
                    timing="4:00 PM - 5:00 PM"
                    place="Room 4"
                    people="10 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="Retrospective"
                    timing="6:00 PM - 7:00 PM"
                    place="Room 5"
                    people="5 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="User research"
                    timing="2:00 PM - 3:00 PM"
                    place="Room 3"
                    people="8 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="Demo"
                    timing="4:00 PM - 5:00 PM"
                    place="Room 4"
                    people="10 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="Retrospective"
                    timing="6:00 PM - 7:00 PM"
                    place="Room 5"
                    people="5 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="User research"
                    timing="2:00 PM - 3:00 PM"
                    place="Room 3"
                    people="8 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                  <TableRow
                    name="Demo"
                    timing="4:00 PM - 5:00 PM"
                    place="Room 4"
                    people="10 people"
                    mode="Zoom"
                    propWidth="7.875rem"
                    propAlignSelf="stretch"
                    propAlignSelf1="stretch"
                  />
                  <TableRow
                    name="Retrospective"
                    timing="6:00 PM - 7:00 PM"
                    place="Room 5"
                    people="5 people"
                    mode="Google Meet"
                    propWidth="unset"
                    propAlignSelf="unset"
                    propAlignSelf1="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTable;
