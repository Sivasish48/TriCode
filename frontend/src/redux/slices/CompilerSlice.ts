import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface compilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;  
    };
    currentLanguage: "html" | "css" | "javascript"; 
   
}

const initialState: compilerSliceStateType = {
    fullCode: {
        html: "this is html code",
        css: "this is css code",
        javascript: "this is js code",  
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
            
            state.fullCode[state.currentLanguage] =action.payload;  
        },
        updateFullCode:(state,action:PayloadAction<compilerSliceStateType["fullCode"]>)=>{
            state.fullCode = action.payload;
        }
       
    }
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodevalue,updateFullCode } = compilerSlice.actions;
