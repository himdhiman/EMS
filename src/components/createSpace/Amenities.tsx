import React from "react";

const Amenities = () => {
  const renderAmenity = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0.75rem] px-[0rem] gap-[0rem_0.75rem]">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
              <input
                className="m-0 absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                type="checkbox"
              />
              <div className="absolute top-[-184.969rem] left-[-67.187rem] w-[1.125rem] h-[1.125rem]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.5rem]">Whiteboard</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[40rem] pt-[2rem] flex flex-col items-start justify-start max-w-full text-left text-[1.125rem] text-gray font-inter">
      <div className="self-stretch flex flex-row items-start justify-start pt-[1rem] px-[1rem] pb-[0.5rem]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <b className="relative tracking-[-0.27px] leading-[1.406rem]">
              Amenities
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[1rem] z-[1] text-[1rem]">
        {renderAmenity()}
      </div>
      <div className="self-stretch h-[4.063rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border z-[2]">
        <button className="cursor-pointer [border:none] py-[0rem] px-[1rem] bg-dodgerblue self-stretch w-[5.25rem] rounded-xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border">
          <div className="bg-dodgerblue overflow-hidden flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <b className="relative text-[0.875rem] tracking-[0.21px] leading-[1.313rem] font-inter text-whitesmoke text-left">
                Save
              </b>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Amenities;
