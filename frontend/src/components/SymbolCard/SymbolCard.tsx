import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import { TrendCardIcon } from '../TrendCardIcon/TrendCardIcon';
import { MarketCapIcon, CompanyIcon, IndustryIcon } from '@/assets/icons';
import { formatCompactNumber } from '@/lib/helpers';
import useSymbolCardSelection from '@/hooks/useSymbolCardSelection';
import usePriceChangeAnimation from '@/hooks/usePriceChangeAnimation';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  isSelected: boolean;
};

const SymbolCard = ({ id, price, isSelected }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const { activeSymbol, selectSymbolCard } = useSymbolCardSelection();
  const animationClass = usePriceChangeAnimation(id, price);
  const hasActiveSelection = !!activeSymbol;
  const showCardInfo = useAppSelector(selectShowCardInfo);

  const cardClass = `symbolCard ${isSelected ? 'symbolCard--selected' : hasActiveSelection ? 'symbolCard--notSelected' : ''
    } ${animationClass}`;

  return (
    <div onClick={() => selectSymbolCard(id)} className={`symbolCard ${cardClass}`}>
      <div className="symbolCard__header">
        {id} <TrendCardIcon trend={trend} />
      </div>
      <div className="symbolCard__price">
        <div className='symbolCard__price__label'>Price:</div>
        <div className='symbolCard__price__value'>{formatCompactNumber(price)} </div>
      </div>

      {showCardInfo && (
        <>
          <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
          <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
          <ListItem Icon={<MarketCapIcon />} label={formatCompactNumber(marketCap)} spacing="space-between" />
        </>
      )}

    </div>
  );
};
export default SymbolCard;
