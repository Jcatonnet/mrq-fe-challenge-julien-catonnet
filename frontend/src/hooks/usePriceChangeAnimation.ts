import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updatePrice, clearAnimation } from '@/store/symbolsCardPriceAnimationSlice';
import { useEffect, useCallback, useRef } from 'react';

const usePriceChangeAnimation = (symbolId: string, price: number) => {
    const dispatch = useAppDispatch();
    const animationClass = useAppSelector((state) => state.symbolsCardPriceAnimation.animations[symbolId]);
    const previousPriceRef = useRef(price);

    const dispatchUpdatePrice = useCallback(() => {
        dispatch(updatePrice({ symbolId, newPrice: price }));
        previousPriceRef.current = price;
    }, [dispatch, symbolId, price]);

    useEffect(() => {
        if (price !== previousPriceRef.current) {
            dispatchUpdatePrice();
            const timeout = setTimeout(() => dispatch(clearAnimation(symbolId)), 1000);
            return () => clearTimeout(timeout);
        }
    }, [dispatchUpdatePrice, dispatch, symbolId, price]);

    return animationClass;
};

export default usePriceChangeAnimation;
