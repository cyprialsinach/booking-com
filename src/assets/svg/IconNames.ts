import { SVGAttributes } from "react";
export type TIcon = SVGAttributes<SVGElement>;
export type TRenderSvg = (args: TIcon) => JSX.Element;
export type TIconNames = "arBox" | "";
