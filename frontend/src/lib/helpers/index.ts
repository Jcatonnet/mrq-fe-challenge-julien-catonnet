export const formatCompactNumber = (number: number | null | undefined): string => {
    if (number === null || number === undefined) {
        return '--';
    }
    if (number >= 1_000_000_000) {
        return `$${(number / 1_000_000_000).toFixed(0)}B`;
    } else if (number >= 1_000_000) {
        return `$${(number / 1_000_000).toFixed(0)}M`;
    } else if (number >= 1_000) {
        return `$${(number / 1_000).toFixed(0)}K`;
    }
    return `$${number.toFixed(0)}`;
}