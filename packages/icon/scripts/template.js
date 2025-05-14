function template({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
  return tpl`
    ${imports}
    import { Ref, forwardRef, cloneElement } from 'react';

    type IconProps = {
      square?: number | string;
      color?: string;
      stroke?: string;
    };

    const ${componentName} = (
      { width, height, square = 24, color, stroke, ...props }: SVGProps<SVGSVGElement> & IconProps,
      ref:Ref<SVGSVGElement>
    ) => {
      const styleProps = {
        ...(color && { fill: color }),
        ...(stroke && { stroke }),
        width: square ?? width,
        height: square ?? height,
        ref,
        ...props,
      };
      return cloneElement(${jsx}, styleProps);
    };

    const ForwardRef = forwardRef(${componentName});
    export default ForwardRef;
  `;
}
module.exports = template;
