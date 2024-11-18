import React from "react";

const NumberInput: IInput = (props) => {
  return (
    <div>
      <div className="relative">
        {props.leftImage && (
          <div className="absolute inset-y-0 left-0 pl-[0.75rem] flex items-center pointer-events-none">
            {props.leftImage}
          </div>
        )}
        <input
          type="number"
          name={props.name}
          className={`block w-full rounded-lg focus:outline-none text-md font-normal bg-greyAsh-30 text-greyAsh placeholder-text-greyAsh ${
            props.leftImage ? "pl-[2.75rem]" : "pl-[0.75rem]"
          } ${props.rightImage ? "pr-[2.75rem]" : "pr-[0.75rem]"} ${
            props.height || "h-[3.5rem]"
          } ${props.disabled && "!bg-grey-100 cursor-not-allowed"}`}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
                  disabled={props.disabled}
                  min={props.min}
          // {...props}
        />
        {props.rightImage && (
          <div className="absolute inset-y-0 right-0 pr-[0.75rem] flex items-center pointer-events-none">
            {props.rightImage}
          </div>
        )}
      </div>
      {props.errorText && (
        <div className="flex items-center gap-[0.375rem] mt-[0.5rem]">
          <span>{/* <Icon name="alertTriangle" /> */}</span>
          <p className="text-red font-bold text-2xs">{props.errorText}</p>
        </div>
      )}
    </div>
  );
};
export default React.memo(NumberInput);
