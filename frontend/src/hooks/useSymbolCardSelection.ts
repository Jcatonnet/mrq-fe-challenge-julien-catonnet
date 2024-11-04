import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setActiveSymbol } from '@/store/symbolCardSelectionSlice';
import { useCallback } from 'react';


const useSymbolCardSelection = () => {
    const dispatch = useAppDispatch();
    const activeSymbol = useAppSelector((state) => state.symbolsCardSelection.activeSymbol);

    const selectSymbolCard = useCallback((symbolId: string) => {
        dispatch(setActiveSymbol(symbolId));
    }, [dispatch]);

    return { activeSymbol, selectSymbolCard };
};
export default useSymbolCardSelection;