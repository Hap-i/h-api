const { createSlice } = require("@reduxjs/toolkit");

const homeMenuSlice = createSlice({
    name: 'homeMenu',
    initialState: "Apps",
    reducers: {
        updateHomeMenu(state, action) {
            return action.payload
        }
    }
})

export const { updateHomeMenu } = homeMenuSlice.actions;
export default homeMenuSlice.reducer;
