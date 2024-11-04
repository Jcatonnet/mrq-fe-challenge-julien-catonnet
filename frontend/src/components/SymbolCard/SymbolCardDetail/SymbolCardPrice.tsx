import { memo } from 'react';

type SymbolCardPriceProps = {
    price: string;
};

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => (
    <div className="symbolCard__price">
        <div className="symbolCard__price__label">Price:</div>
        <div className="symbolCard__price__value">{price}</div>
    </div>
);

export default memo(SymbolCardPrice);
