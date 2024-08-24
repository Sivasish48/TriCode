import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export interface compilerSliceStateType{
    html: string,
    css: string,
    js: string,
    currentLanguage: "html" | "css" | "javascript"
}
const initialState = {
    "html": "",
    "css": "",
    "js": "",
    currentLanguage: "html",
}

const compilerSlice = createSlice({
    name: 'compilerSlice',
    initialState,
    reducers:{
        updateCurrentLanguage:(state,action: PayloadAction<compilerSliceStateType["currentLanguage"]>)=>{
            state.currentLanguage = action.payload;
    }
}
}
 );

 
export default compilerSlice.reducer
export const{updateCurrentLanguage} = compilerSlice.actions;