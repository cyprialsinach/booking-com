import StringInput from "./StringInput";
import SelectInput from "./SelectInput";
import React from 'react'

const CustomInput: IInput = (props) => {
    const { type, ...restProps } = props;
    
  if (type === "select") return <SelectInput {...restProps} />;

  return <StringInput {...restProps} />;
};


export default CustomInput;
