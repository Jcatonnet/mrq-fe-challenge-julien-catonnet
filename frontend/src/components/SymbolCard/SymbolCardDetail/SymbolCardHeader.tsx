import { memo } from 'react';
import { TrendCardIcon } from '../../TrendCardIcon/TrendCardIcon';

type SymbolCardHeaderProps = {
    id: string;
    trend: string | null;
};

const SymbolCardHeader = memo(({ id, trend }: SymbolCardHeaderProps) => (
    <div className="symbolCard__header">
        {id} <TrendCardIcon trend={trend} />
    </div>
));

export default SymbolCardHeader;
