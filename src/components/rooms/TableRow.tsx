import React, { FunctionComponent } from 'react'


export type TableRowType = {
    roomName: string;
    eventsCount: number;
    conflicts: number;
  };

const TableRow: FunctionComponent<TableRowType> = ({
    roomName,
    eventsCount,
    conflicts
}) => {
  return (
    <div className="w-[57.875rem] flex-1 box-border flex flex-row items-start justify-start text-left text-[0.875rem] text-gray font-inter border-t-[1px] border-solid border-gainsboro-100">
      <div className="self-stretch w-1/3 flex flex-col items-center justify-center py-[0.5rem] px-[1rem] box-border">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.313rem]">
            {roomName}
          </div>
        </div>
      </div>
      <div className="self-stretch w-1/3 flex flex-col items-center justify-center py-[0.5rem] px-[1rem] box-border text-steelblue">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.313rem]">
            {eventsCount}
          </div>
        </div>
      </div>
      <div className="self-stretch w-1/5 flex flex-col items-center justify-center py-[0.5rem] px-[1rem] box-border">
        <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-aliceblue self-stretch h-[2rem] rounded-xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
          <div className="bg-aliceblue overflow-hidden flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative text-[0.875rem] leading-[1.313rem] font-medium font-inter text-gray text-left">
                {conflicts}
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default TableRow