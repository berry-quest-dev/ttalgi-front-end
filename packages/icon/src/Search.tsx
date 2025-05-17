import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, cloneElement } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgSearch = ({
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
  return cloneElement(<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, styleProps);
};
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;