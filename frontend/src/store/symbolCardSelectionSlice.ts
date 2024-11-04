import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface SelectionState {
    activeSymbol: string | null;
}
const initialState: SelectionState = {
    activeSymbol: null,
};
const symbolCardSelectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setActiveSymbol: (state, action: PayloadAction<string | null>) => {
            state.activeSymbol = state.activeSymbol === action.payload ? null : action.payload;
        },
    },
});
export const { setActiveSymbol } = symbolCardSelectionSlice.actions;
export default symbolCardSelectionSlice.reducer;