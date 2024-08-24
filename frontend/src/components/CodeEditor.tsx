import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNightInit } from '@uiw/codemirror-theme-tokyo-night';
import { loadLanguage, langNames } from '@uiw/codemirror-extensions-langs';
import { tags as t } from "@lezer/highlight";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function CodeEditor() {
  console.log("Available Languages: ", langNames);

  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val: string) => {
    console.log("Code Value: ", val);
    setValue(val);
  }, []);

  const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);

  // Load the language extension based on the current language
  const languageExtension = loadLanguage(currentLanguage);

  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={languageExtension ? [languageExtension] : []}
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
