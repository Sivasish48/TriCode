import React from 'react';
import CodeMirror from '@uiw/react-codemirror';


import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';

import { loadLanguage,langNames } from '@uiw/codemirror-extensions-langs';
import { tags as t } from "@lezer/highlight";
export default function CodeEditor() {
  console.log("langNames: ", langNames);

  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val: any) => {
    console.log("val: ", val);
    setValue(val);
  }, []);

  return (
    
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage("javascript")!]}
      onChange={onChange}
      theme={tokyoNightInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
