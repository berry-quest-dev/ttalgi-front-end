import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgUser = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  return <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} fill={color} stroke={stroke} {...props}><path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;