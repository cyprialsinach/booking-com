type Children = React.ReactNode;

type PropsMap<T = object, D = object> = React.FC<
  T & {
    children?: Children;
    data?: D;
  }
>;

type IAuthLayout = PropsMap<Partial<LayoutPropsDTO>>;

type IAppLayout = PropsMap<Partial<LayoutPropsDTO>>;

type ILayout = PropsMap<LayoutPropsDTO>;

type ILogin = PropsMap<Partial<LoginDTO>>;

type INavbar = PropsMap<NavbarDTO>;

type IInput = PropsMap<IInputDTO>;

type IButton = PropsMap<IButtonDTO>;

type IModal = PropsMap<IModalDTO>;

type IItineriesCard = PropsMap<IItineriesCardDTO>;

type IOption = {
  id: number;
  name: string;
};
type INavLinks = {
  route?: string;
  label: string;
  icon: string;
};

type ISpinner = {
  borderColor?: string;
  height?: string;
  width?: string;
};
