import {createSlice,PayloadAction} from '@reduxjs/toolkit';


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
        updateCurrentLanguage:(state,action: PayloadAction<string>)=>{
            state.currentLanguage = action.payload;
    }
}
}
 );

 
export default compilerSlice.reducer
export const{updateCurrentLanguage} = compilerSlice.actions;