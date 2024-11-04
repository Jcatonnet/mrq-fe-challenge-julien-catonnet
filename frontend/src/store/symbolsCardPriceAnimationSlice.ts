import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface PriceState {
    previousPrices: { [key: string]: number };
    animations: { [key: string]: string };
}
const initialState: PriceState = {
    previousPrices: {},
    animations: {},
};
const symbolsCardPriceAnimationSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        updatePrice: (state, action: PayloadAction<{ symbolId: string; newPrice: number }>) => {
            const { symbolId, newPrice } = action.payload;
            const previousPrice = state.previousPrices[symbolId] ?? newPrice;
            const priceChangePercent = ((newPrice - previousPrice) / previousPrice) * 100;
            let animationClass = '';
            if (Math.abs(priceChangePercent) > 25) {
                animationClass = 'symbolCard__shake';
            }
            if (priceChangePercent > 0) {
                animationClass += ' symbolCard__flashGreen';
            } else if (priceChangePercent < 0) {
                animationClass += ' symbolCard__flashRed';
            }
            state.previousPrices[symbolId] = newPrice;
            state.animations[symbolId] = animationClass.trim();
        },
        clearAnimation: (state, action: PayloadAction<string>) => {
            state.animations[action.payload] = '';
        },
    },
});
export const { updatePrice, clearAnimation } = symbolsCardPriceAnimationSlice.actions;
export default symbolsCardPriceAnimationSlice.reducer;