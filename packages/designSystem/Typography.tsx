import { clsx } from "clsx";
import React, { ElementType, HTMLAttributes, ReactNode } from "react";

const variantClassMap = {
  headline: "text-headline-20-b",
  "title-18-sb": "text-title-18-sb",
  "title-18-r": "text-title-18-r",
  "title-16-sb": "text-title-16-sb",
  "body-16-m": "text-body-16-m",
  "body-15-m": "text-body-15-m",
  "body-14-r": "text-body-14-r",
  "body-12-b": "text-body-12-b",
};

const colorClassMap = {
  default: "text-default",
  title: "text-title",
  muted: "text-muted",
  on: "text-on",
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  variant?: keyof typeof variantClassMap;
  color?: keyof typeof colorClassMap;
  className?: string;
}

const Typography = ({
  as: Tag = "p",
  children,
  variant = "body-14-r",
  color = "default",
  className,
  ...rest
}: TypographyProps) => {
  return (
    <Tag className={clsx(colorClassMap[color], variantClassMap[variant], className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;
