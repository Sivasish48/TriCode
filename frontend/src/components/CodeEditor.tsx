import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import { loadLanguage, langNames } from "@uiw/codemirror-extensions-langs";
import { tags as t } from "@lezer/highlight";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  updateCodevalue,
  
} from "../redux/slices/CompilerSlice.ts";

export default function CodeEditor() {
  const dispatch = useDispatch();
  console.log("Available Languages: ", langNames);

  //const [value, setValue] = React.useState("console.log('hello world!');");


  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

   const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);


  const onChange = React.useCallback((value: string) => {
    // console.log("Code Value: ", val);
    // setValue(val);
    dispatch(updateCodevalue(value));
  }, []);

 
  // const languageExtension = loadLanguage(currentLanguage);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
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
