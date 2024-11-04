import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updatePrice, clearAnimation } from '@/store/symbolsCardPriceAnimationSlice';
import { useEffect } from 'react';

const usePriceChangeAnimation = (symbolId: string, price: number) => {
    const dispatch = useAppDispatch();
    const animationClass = useAppSelector((state) => state.symbolsCardPriceAnimation.animations[symbolId]);

    useEffect(() => {
        dispatch(updatePrice({ symbolId, newPrice: price }));
        const timeout = setTimeout(() => {
            dispatch(clearAnimation(symbolId));
        }, 1000);
        return () => clearTimeout(timeout);
    }, [dispatch, symbolId, price]);

    return animationClass;
};

export default usePriceChangeAnimation;