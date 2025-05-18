import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgHeart = ({
  width,
  height,
  color,
  stroke,
  ...props
}: SVGProps<SVGSVGElement> & IconProps, ref: Ref<SVGSVGElement>) => {
  return <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} fill={color} stroke={stroke} {...props}><path d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;