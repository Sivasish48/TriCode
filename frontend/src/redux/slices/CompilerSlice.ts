import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface compilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;  // Use 'js' instead of 'javascript'
    };
    currentLanguage: "html" | "css" | "javascript";  // Match with keys in `fullCode`
   
}

const initialState: compilerSliceStateType = {
    fullCode: {
        html: "this is html code",
        css: "this is css code",
        javascript: "this is js code",  // Ensure 'js' is used as the key
    },
    currentLanguage: "html",
   
};

const compilerSlice = createSlice({
    name: 'compilerSlice',
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<compilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        },
        updateCodevalue: (state, action: PayloadAction<string>) => {
            
            state.fullCode[state.currentLanguage] =action.payload;  // Now TypeScript understands this correctly
        },
       
    }
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodevalue } = compilerSlice.actions;
