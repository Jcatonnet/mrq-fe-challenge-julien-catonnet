import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setActiveSymbol } from '@/store/symbolCardSelectionSlice';


const useSymbolCardSelection = () => {
    const dispatch = useAppDispatch();
    const activeSymbol = useAppSelector((state) => state.symbolsCardSelection.activeSymbol);

    const selectSymbolCard = (symbolId: string) => {
        dispatch(setActiveSymbol(symbolId));
    };

    return { activeSymbol, selectSymbolCard };
};
export default useSymbolCardSelection;