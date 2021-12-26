export interface APIRequestCurrency {
    abbreviation: string;
    amount: number;
};

export interface APIResponceCurrency extends APIRequestCurrency {
    name: string;
};
