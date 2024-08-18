import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "../components/ui/resizable";
  
  export default function Editor() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-screen rounded-lg border"
      >
        {/* Left side - Code Editors */}
        <ResizablePanel defaultSize={50} className="min-w-[250px]">
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={33.33}>
              <div className="flex text-white h-full items-center justify-center p-6 border-b">
                <span className="font-semibold">Editor One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33.33}>
              <div className="flex h-full text-white items-center justify-center p-6 border-b">
                <span className="font-semibold">Editor Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33.33}>
              <div className="flex h-full text-white items-center justify-center p-6">
                <span className="font-semibold">Editor Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        
        <ResizableHandle />
  
        {/* Right side - Output */}
        <ResizablePanel defaultSize={50} className="min-w-[250px]">
          <div className="flex h-full  text-white items-center justify-center p-6">
            <span className="font-semibold">Output</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
  