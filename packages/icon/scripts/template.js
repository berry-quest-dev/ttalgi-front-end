function template({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
  return tpl`
    ${imports}
    import { Ref, forwardRef } from 'react';

    type IconProps = {
      square?: number | string;
      color?: string;
    };

    const ${componentName} = 
      ({ width, height, square, color, ...props }:SVGProps<SVGSVGElement> & IconProps, ref:Ref<SVGSVGElement>) => (
        ${jsx}
      )

    const ForwardRef = forwardRef(${componentName});
    export default ForwardRef;
  `;
}

module.exports = template;
