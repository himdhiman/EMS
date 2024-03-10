import React from 'react'
import TableRow from './TableRow'

const RoomsTable = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border max-w-full text-left text-[0.875rem] text-gray font-inter">
      <div className="self-stretch flex-1 rounded-xl bg-whitesmoke box-border overflow-hidden flex flex-col items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] max-w-full border-[1px] border-solid border-gainsboro-200">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch bg-whitesmoke overflow-x-auto flex flex-row items-start justify-start">
              <div className="w-1/3 shrink-0 flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.313rem] font-medium">
                    Room
                  </div>
                </div>
              </div>
              <div className="w-1/3 shrink-0 flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.313rem] font-medium">
                    Schedule
                  </div>
                </div>
              </div>
              <div className="w-1/3 shrink-0 flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[1.313rem] font-medium">
                    Conflicts
                  </div>
                </div>
              </div>
              <div className="h-[2.844rem] w-[8.438rem] shrink-0" />
            </div>
          </div>
          <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start max-w-full">
            <TableRow
              roomName="Grand Ballroom"
              eventsCount={1}
              conflicts={0}
            />
            <TableRow
              roomName="Marina"
              eventsCount={2}
              conflicts={1}
            />
            <TableRow
              roomName="Golden Gate"
              eventsCount={1}
              conflicts={0}
            />
            <TableRow
              roomName="Marina"
              eventsCount={2}
              conflicts={1}
            />
            <TableRow
              roomName="Golden Gate"
              eventsCount={1}
              conflicts={0}
            />
            <TableRow
              roomName="Marina"
              eventsCount={2}
              conflicts={1}
            />
            <TableRow
              roomName="Golden Gate"
              eventsCount={1}
              conflicts={0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomsTable