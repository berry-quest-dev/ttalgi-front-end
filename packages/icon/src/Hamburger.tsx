import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgHamburger = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  return <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} fill={color} stroke={stroke} {...props}><path d="M5 17H19M5 12H19M5 7H19" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
const ForwardRef = forwardRef(SvgHamburger);
export default ForwardRef;