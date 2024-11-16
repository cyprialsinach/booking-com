import React from "react";
import Spinner from "./Spinner";


const CustomButton: IButton = ({
  type,
  color = "text-white",
  bgColor = "bg-primary",
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  height = "h-[2.5rem]",
  fontSize = "text-sm",
  padding,
  isLoading,
  isDisabled,
}) => {
  // Generate classes dynamically based on props
  const buttonClasses = `btnClass   ${color} ${bgColor} ${height} ${fontSize} ${padding} ${
    isDisabled && "!bg-grey-100 cursor-not-allowed"
  } ${isLoading && "!cursor-wait"}`;
  return (
    <button
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {!isLoading ? (
        <React.Fragment>
          {" "}
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </button>
  );
};

export default React.memo(CustomButton);
