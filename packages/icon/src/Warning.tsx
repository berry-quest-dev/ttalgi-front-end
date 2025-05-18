import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgWarning = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  return <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} fill={color} stroke={stroke} {...props}><path d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;