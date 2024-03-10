import React, { FunctionComponent } from "react";

type InputProps = {
  name?: string;
  placeholder?: string;
};

const InputField: FunctionComponent<InputProps> = ({ name, placeholder }) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-[0.75rem] px-[1rem] box-border max-w-full text-left text-[1rem] text-gray font-inter">
      <div className="flex-1 flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem]">
            <div className="self-stretch relative leading-[1.5rem] font-medium">
              {name}
            </div>
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-aliceblue self-stretch h-[3.5rem] rounded-xl flex flex-row items-center justify-start p-[1rem] box-border font-inter text-[1rem] text-steelblue min-w-[15.625rem]"
            placeholder={placeholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
