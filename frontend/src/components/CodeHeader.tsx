import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentLanguage,
  updateFullCode,
} from "../redux/slices/CompilerSlice";
import { RootState } from "../redux/store";
import { compilerSliceStateType } from "../redux/slices/CompilerSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Code, Loader, Copy } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";


function CodeHeader() {
  const { urlId } = useParams();

  const navigate = useNavigate();
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn,setShareBtn] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  console.log("Full Code: ", fullCode);

  const loadCode = async () => {
    try {
      const response = await axios.post("http://localhost:5000/compiler/load", {
        urlId: urlId,
      });
      dispatch(updateFullCode(response.data.fullCode));
      console.log("Response: ", response.data);
    } catch (error) {
      console.log("error is " + error);
    }
  };

  const handleSave = async () => {
    setSaveLoading(true); // Start loading
    try {
      const response = await axios.post("http://localhost:5000/compiler/save", {
        fullCode: {
          html: fullCode.html,
          css: fullCode.css,
          javascript: fullCode.javascript,
        },
      });
      console.log("Response: ", response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setSaveLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
      setShareBtn(true);
    }else{
      setShareBtn(false);
    }
  }, [urlId]);

 
  return (
    <div className="h-[50px] bg-transparent text-white flex justify-end items-center px-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={handleSave}
          variant="ghost"
          size="icon"
          className="rounded-full border border-solid border-2 border-white hover:border-none hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          {saveLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <SaveIcon className="w-5 h-5" />
            </>
          )}
        </Button>
{shareBtn && (
        <AlertDialog>
          <AlertDialogTrigger className="flex flex-row gap-2 p-4 py-2 border border-solid border-2 border-white hover:border-none rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110">
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black text-white border border-gray-700 rounded-lg shadow-lg">
            <AlertDialogHeader>
              <AlertDialogTitle className="flex flex-row gap-2 items-center justify-center text-purple-500">
                <Code />
                Share Your Code!
                <Code />
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  value={window.location.href}
                  readOnly
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast("URL has been Copied to clipboard!");
                  }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </AlertDialogDescription>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel className="px-4 py-2 rounded bg-gray-800 hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-110">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
)
}

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
                className="bg-dark text-white hover:bg-dark/90 focus:bg-white"
              >
                HTML
              </SelectItem>
              <SelectItem
                value="css"
                className="bg-dark text-white hover:bg-dark/90 focus:bg-white"
              >
                CSS
              </SelectItem>
              <SelectItem
                value="javascript"
                className="bg-dark text-white hover:bg-dark/90 focus:bg-white"
              >
                JAVASCRIPT
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
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
