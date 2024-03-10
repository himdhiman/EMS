import React, { FunctionComponent } from "react";

type SelectButtonProps = {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
};

const SelectButton: FunctionComponent<SelectButtonProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-[0.75rem] px-[1rem] box-border max-w-full text-left text-[1rem] text-gray font-inter hover:cursor-pointer">
      <div className="flex-1 flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div
            onClick={onClick}
            className={`w-full [border:none] [outline:none] ${
              isSelected
                ? "bg-steelblue text-gray"
                : " bg-aliceblue text-steelblue"
            } self-stretch h-[3.5rem] rounded-xl flex flex-row items-center justify-center p-[1rem] box-border font-bold text-[1rem] min-w-[10.5rem]`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectButton;
