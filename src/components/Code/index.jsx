import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import clsx from "clsx";

export default function Code({ code, className: codeClassName }) {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={clsx(className, codeClassName)}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
