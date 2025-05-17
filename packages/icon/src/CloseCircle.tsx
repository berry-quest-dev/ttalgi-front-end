import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, cloneElement } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgCloseCircle = ({
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
  return cloneElement(<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, styleProps);
};
const ForwardRef = forwardRef(SvgCloseCircle);
export default ForwardRef;