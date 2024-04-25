const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').cakeActions
const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered:(state)=>{
            state.numOfIcecreams--;
        },
        restocked: (state,action)=>{
            state.numOfIcecreams += action.payload
        }
    },
    extraReducers:(builder)=>{
        // builder.addCase('cake/ordered',(state)=>{
        //     state.numOfIcecreams--
        // })
         builder.addCase(cakeActions.ordered,(state,action)=>{
             state.numOfIcecreams--
         })
    }
})
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;