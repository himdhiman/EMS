import React, { CSSProperties, FunctionComponent, useMemo } from "react";

export type TableRowProps = {
  name?: string;
  timing?: string;
  place?: string;
  people?: string;
  mode?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const TableRow: FunctionComponent<TableRowProps> = ({
  name,
  timing,
  place,
  people,
  mode,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const depth9Frame5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const depth10Frame0Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const googleMeetStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className="self-stretch flex-1 flex-col text-steelblue items-start justify-start">
      <nav className="m-0 self-stretch bg-whitesmoke border-t-[1px] border-solid border-gainsboro-100 flex flex-row items-start justify-start text-left text-[0.875rem] font-inter">
        <div className="flex-1 flex flex-col items-start justify-start py-[0.75rem] text-gray px-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              {name}
            </div>
          </div>
        </div>
        <div className="w-[8.25rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              Meeting
            </div>
          </div>
        </div>
        <div className="w-[7.438rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              {timing}
            </div>
          </div>
        </div>
        <div className="w-[7.75rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              {place}
            </div>
          </div>
        </div>
        <div className="w-[7.813rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              {people}
            </div>
          </div>
        </div>
        <div className="w-[7.875rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-medium">
              {mode}
            </div>
          </div>
        </div>
        <div className="w-[6.188rem] flex flex-col items-start justify-start py-[0.75rem] px-[1rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[1.313rem] font-bold">
              Edit
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TableRow;
