import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, cloneElement } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgSliders = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  const styleProps = {
    ...(color && {
      fill: color
    }),
    ...(stroke && {
      stroke
    }),
    width,
    height,
    ref,
    ...props
  };
  return cloneElement(<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 18H21M3 18H6M6 18V20M6 18V16M20 12H21M3 12H16M16 12V14M16 12V10M14 6H21M3 6H10M10 6V8M10 6V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, styleProps);
};
const ForwardRef = forwardRef(SvgSliders);
export default ForwardRef;