import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";

import CodeHeader from "./CodeHeader";
import CodeEditor from "../components/CodeEditor";

export default function Editor() {
  return (
    <ResizablePanelGroup
    direction="horizontal"
    className="w-full h-screen rounded-lg border"
  >
    {/* Left side - Single Code Editor */}
    <ResizablePanel defaultSize={50} className="min-w-[250px]">
      <div className="h-full">
        {/* Code Header */}
        <CodeHeader />

        {/* Code Editor */}
        <div className="flex-grow">
          <CodeEditor />
        </div>
      </div>
    </ResizablePanel>

    <ResizableHandle />

    {/* Right side - Output */}
    <ResizablePanel defaultSize={50} className="min-w-[250px] bg-black">
      <div className="flex h-full text-white items-center justify-center p-6">
        <span className="font-semibold">Output</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
  );
}
