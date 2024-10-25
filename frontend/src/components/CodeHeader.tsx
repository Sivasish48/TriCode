import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguage } from "../redux/slices/CompilerSlice";
import { RootState } from "../redux/store";
import { compilerSliceStateType } from "../redux/slices/CompilerSlice";
// import { useToast } from "../hooks/use-toast";
//import { handleError } from "../error/handleError";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useParams } from "react-router-dom";

function CodeHeader() {
  const navigate = useNavigate();
  // const {urlId} = useParams()
  // console.log("URL ID: ",urlId)
  
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  // const { toast } = useToast();
  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);
  console.log("Full Code: ", fullCode);
  const handleSave = async () => {
    try {
     
  
      const response = await axios.post("http://localhost:5000/compiler/save", {
        fullCode: {
          html: fullCode.html,
          css: fullCode.css,
          javascript: fullCode.javascript,
        }
      });
      console.log("Response: ", response.data);
      navigate(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div className="h-[50px] bg-transparent text-white flex justify-end items-center px-4">
      <div className="flex items-center gap-4">
        <Button
        onClick={handleSave}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <SaveIcon className="w-5 h-5" />
          <span className="sr-only">Save</span>
        </Button>
        <Button
          variant="outline"
          className="rounded-full  bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-none hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <ShareIcon className="w-5 h-5 mr-2" />
          <span>Share</span>
        </Button>
        <div>
          <Select
            defaultValue={currentLanguage}
            onValueChange={(value) => {
              dispatch(
                updateCurrentLanguage(
                  value as compilerSliceStateType["currentLanguage"]
                )
              );
            }}
          >
            <SelectTrigger className="w-[180px] bg-dark text-white">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className="bg-dark text-white">
              <SelectItem
                value="html"
                className="bg-dark text-white hover:bg-dark/90 hover:text-white focus:bg-dark focus:text-white"
              >
                HTML
              </SelectItem>
              <SelectItem
                value="css"
                className="bg-dark text-white hover:bg-dark/90 hover:text-white focus:bg-dark focus:text-white"
              >
                CSS
              </SelectItem>
              <SelectItem
                value="javascript"
                className="bg-dark text-white hover:bg-dark/90 hover:text-white focus:bg-dark focus:text-white"
              >
                JAVASCRIPT
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CodeHeader;

function SaveIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
