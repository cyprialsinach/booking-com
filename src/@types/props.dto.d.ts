type LayoutTypes = "auth" | "app";
type LayoutPropsDTO = {
  type: LayoutTypes;
};

type LoginDTO = object;

type NavbarDTO = object;

type IModalDTO = {
  isOpen: boolean;
  setIsOpen: (data?: any) => void;
  data?: any;
};

type IItineriesCardDTO = {
type: 'Flights' | 'Hotels' | 'Activities'
}

type IInputDTO = {
  type?: "text" | "select"|"date" | "number";
  leftImage?: ReactNode;
  rightImage?: ReactNode;
  className?: string;
  name?: string;
  height?: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options?: Option[];
  placeholder?: string;
  errorText?: string;
  disabled?: boolean;
  onBlur?:
  FocusEventHandler<HTMLInputElement> | undefined;
  min?:number
};
type IButton = {
  type?: "submit";
  color?: string;
  bgColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  children?: ReactNode;
  height?: string;
  className?: Children;
  fontSize?: string;
  padding?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  fontWeight?:string
};