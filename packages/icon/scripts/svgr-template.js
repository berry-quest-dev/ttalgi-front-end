function template(variables, { tpl }) {
  const { imports, componentName, props, jsx, exports } = variables;
  return tpl`
    ${imports};

    type IconProps = SVGProps<SVGSVGElement> & {
      width?: number;
      height?: number;
      square?: number;
      color?: string;
    };

    const ${componentName} = ({ width = 24, height = 24, square, color, ...props }: IconProps) => {
      return (${jsx})
    }

    ${exports}
  `;
}

module.exports = template;
