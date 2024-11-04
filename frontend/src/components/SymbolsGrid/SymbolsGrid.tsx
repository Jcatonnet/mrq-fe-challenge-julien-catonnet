import { memo, useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import './symbolsGrid.css'

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = memo(({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  const handleSymbolClick = useCallback((symbolId: string) => onSymbolClick(symbolId), [onSymbolClick]);

  const symbolCards = useMemo(() => stockSymbols.map((id) => (
    <SymbolCard
      onClick={handleSymbolClick}
      key={id}
      id={id}
      isSelected={id === activeSymbol}
    />
  )), [stockSymbols, handleSymbolClick, activeSymbol]);



  return (
    <div className='symbolsGrid__grid'>
      {symbolCards}
    </div>
  );
});

export default SymbolsGrid;
