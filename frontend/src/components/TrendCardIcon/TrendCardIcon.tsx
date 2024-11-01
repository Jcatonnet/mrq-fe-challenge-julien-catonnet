import IconUp from '@/assets/up.png';
import IconDown from '@/assets/down.png';
import './trendCardIcon.css';

interface TrendIconProps {
    trend: string | null;
}

const trendIcons: { [key: string]: string } = {
    UP: IconUp,
    DOWN: IconDown,
};

export const TrendCardIcon = ({ trend }: TrendIconProps) => {
    const icon = trend ? trendIcons[trend] : null;
    return icon ? <img className="trend__card__icon" src={icon} /> : <div />;
}
