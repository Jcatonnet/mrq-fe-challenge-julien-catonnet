import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import { TrendCardIcon } from '../TrendCardIcon/TrendCardIcon';
import { MarketCapIcon, CompanyIcon, IndustryIcon } from '@/assets/icons';
import { formatCompactNumber } from '@/lib/helpers';
import useSymbolCardSelection from '@/hooks/useSymbolCardSelection';
import usePriceChangeAnimation from '@/hooks/usePriceChangeAnimation';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import { memo, useCallback, useMemo } from 'react';

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

  const cardInfo = useMemo(() => showCardInfo && (
    <>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem Icon={<MarketCapIcon />} label={formatCompactNumber(marketCap)} spacing="space-between" />
    </>
  ), [showCardInfo, companyName, industry, marketCap]);

  return (
    <div onClick={handleClick} className={cardClass}>
      <div className="symbolCard__header">
        {id} <TrendCardIcon trend={trend} />
      </div>
      <div className="symbolCard__price">
        <div className='symbolCard__price__label'>Price:</div>
        <div className='symbolCard__price__value'>{formattedPrice}</div>
      </div>

      {cardInfo}

    </div>
  );
});
export default SymbolCard;
