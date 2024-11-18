import DateInput from "./DateInput";
import NumberInput from "./NumberInput";
import StringInput from "./StringInput";
// import SelectInput from "./SelectInput";

const CustomInput: IInput = (props) => {
    const { type, ...restProps } = props;
    
  if (type === "date") return <DateInput {...restProps} />;
  if (type === "number") return <NumberInput {...restProps} />;

  return <StringInput {...restProps} />;
};


export default CustomInput;
