import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, cloneElement } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgNavigation = ({
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
  return cloneElement(<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M4.80518 3.55545L20.6143 8.4198C21.4766 8.68511 21.5746 9.86635 20.7677 10.2698L14.0673 13.6199C13.8738 13.7167 13.7168 13.8736 13.62 14.0672L10.27 20.7671C9.86658 21.5741 8.68555 21.4762 8.42024 20.614L3.55544 4.80486C3.31935 4.03759 4.0379 3.31937 4.80518 3.55545Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, styleProps);
};
const ForwardRef = forwardRef(SvgNavigation);
export default ForwardRef;