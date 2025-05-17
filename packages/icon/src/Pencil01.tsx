import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, cloneElement } from 'react';
type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
};
const SvgPencil01 = ({
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
  return cloneElement(<svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, styleProps);
};
const ForwardRef = forwardRef(SvgPencil01);
export default ForwardRef;