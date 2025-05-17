import { ReactElement } from "react";
import * as icons from "./index";
import { colors } from "packages/designSystem";

type IconType = keyof typeof icons;

interface IconProps {
  iconType: IconType;
  className?: string;
  ref?: React.Ref<SVGSVGElement>;
  size?: number | string;
  color?: string;
  stroke?: string;
  onClick?: () => void;
}

const NORMAL_COLOR = colors.none;
const NORMAL_STROKE_COLOR = colors.secondary;

export default function Icon({
  iconType,
  className,
  ref,
  size = 24,
  color,
  stroke,
  onClick,
}: IconProps): ReactElement {
  const SVGIcon = icons[iconType];
  const fillColor = color || NORMAL_COLOR;
  const strokeColor = stroke || NORMAL_STROKE_COLOR;

  return (
    <SVGIcon
      className={className}
      ref={ref}
      color={fillColor}
      stroke={strokeColor}
      width={size}
      height={size}
      onClick={onClick}
    />
  );
}
