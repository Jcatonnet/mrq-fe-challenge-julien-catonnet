import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import './symbolsView.css';
import useSymbolCardSelection from '@/hooks/useSymbolCardSelection';
import { memo } from 'react';

const SymbolsView = () => {
  const { activeSymbol, selectSymbolCard } = useSymbolCardSelection();

  return (
    <div className="symbolsView">
      <DesktopInfo />
      <div className="symbolsView__content">
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>
        <div className="symbolsView__cards">
          <SymbolsGrid onSymbolClick={selectSymbolCard} activeSymbol={activeSymbol}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SymbolsView);
