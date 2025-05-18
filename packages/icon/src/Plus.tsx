import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgPlus = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  return <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} fill={color} stroke={stroke} {...props}><path d="M6 12H12M12 12H18M12 12V18M12 12V6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;