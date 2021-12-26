export interface State {
    [key: string]: CurrencyInfo;
};

interface CurrencyInfo {
    amount: number;
    fullName: string;
};
