import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import { TrendCardIcon } from '../TrendCardIcon/TrendCardIcon';
import { MarketCapIcon, CompanyIcon, IndustryIcon } from '@/assets/icons';


type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div className="symbolCard__header">
        {id} <TrendCardIcon trend={trend} />
      </div>
      <div className="symbolCard__price">
        <div className='symbolCard__price__label'>Price:</div>
        <div className='symbolCard__price__value'>{price || '--'} </div>
      </div>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem Icon={<MarketCapIcon />} label={marketCap.toString()} spacing="space-between" />
    </div>
  );
};
export default SymbolCard;
