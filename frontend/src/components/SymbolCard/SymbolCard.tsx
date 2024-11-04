import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { formatCompactNumber } from '@/lib/helpers';
import useSymbolCardSelection from '@/hooks/useSymbolCardSelection';
import usePriceChangeAnimation from '@/hooks/usePriceChangeAnimation';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import { memo, useCallback, useMemo } from 'react';
import SymbolCardHeader from './SymbolCardDetail/SymbolCardHeader';
import SymbolCardInfo from './SymbolCardDetail/SymbolCardInfo';
import SymbolCardPrice from './SymbolCardDetail/SymbolCardPrice';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  isSelected: boolean;
};

const SymbolCard = memo(({ id, isSelected }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const price = useAppSelector((state) => state.prices[id]);

  const { activeSymbol, selectSymbolCard } = useSymbolCardSelection();
  const animationClass = usePriceChangeAnimation(id, price);
  const hasActiveSelection = !!activeSymbol;
  const showCardInfo = useAppSelector(selectShowCardInfo);

  const cardClass = useMemo(() =>
    `symbolCard ${isSelected ? 'symbolCard--selected' : hasActiveSelection ? 'symbolCard--notSelected' : ''} ${animationClass}`,
    [isSelected, hasActiveSelection, animationClass]
  );

  const handleClick = useCallback(() => selectSymbolCard(id), [selectSymbolCard, id]);

  const formattedPrice = useMemo(() => formatCompactNumber(price), [price]);
  const formattedMarketCap = useMemo(() => formatCompactNumber(marketCap), [marketCap]);

  return (
    <div onClick={handleClick} className={cardClass}>
      <SymbolCardHeader id={id} trend={trend} />
      <SymbolCardPrice price={formattedPrice} />

      {showCardInfo && (
        <SymbolCardInfo
          companyName={companyName}
          industry={industry}
          marketCap={formattedMarketCap}
        />
      )}
    </div>
  );
});
export default SymbolCard;
