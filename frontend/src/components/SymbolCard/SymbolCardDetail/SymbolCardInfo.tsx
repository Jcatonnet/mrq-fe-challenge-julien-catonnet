import { memo } from 'react';
import ListItem from '@/components/ListItem';
import { MarketCapIcon, CompanyIcon, IndustryIcon } from '@/assets/icons';

type SymbolCardInfoProps = {
    companyName: string;
    industry: string;
    marketCap: string;
};

const SymbolCardInfo = ({ companyName, industry, marketCap }: SymbolCardInfoProps) => (
    <>
        <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
        <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
        <ListItem Icon={<MarketCapIcon />} label={marketCap} spacing="space-between" />
    </>
);

export default memo(SymbolCardInfo);
