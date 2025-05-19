function template({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
  return tpl`
    ${imports}
    import { Ref, forwardRef } from 'react';

    type IconProps = {
      width?: number | string;
      height?: number | string;
      color?: string;
      stroke?: string;
    };

    const ${componentName} = (
      { width, height, color, stroke, ...props }: SVGProps<SVGSVGElement> & IconProps,
      ref:Ref<SVGSVGElement>
    ) => {
      return (
        ${jsx}
      );
    };

    const ForwardRef = forwardRef(${componentName});
    export default ForwardRef;
  `;
}
module.exports = template;
