import babelTemplate from "@babel/template";
import * as t from "@babel/types";

const template = babelTemplate.smart({
  plugins: ["typescript", "jsx"],
});

const customTemplate = (
  variables: {
    componentName: any;
    jsx: any;
  },
  _opts: any,
  _state: any
): t.Statement[] => {
  const { componentName, jsx } = variables;

  const result = template.ast`
    import * as React from 'react';
    import type { SVGProps } from 'react';

    const ${componentName} = (props: SVGProps<SVGSVGElement>) => (${jsx});
    export default ${componentName};
  `;

  return Array.isArray(result) ? result : [result];
};

export default customTemplate;
