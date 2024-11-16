import StringInput from "./StringInput";
// import SelectInput from "./SelectInput";

const CustomInput: IInput = (props) => {
    const { ...restProps } = props;
    
//   if (type === "select") return <SelectInput {...restProps} />;

  return <StringInput {...restProps} />;
};


export default CustomInput;
