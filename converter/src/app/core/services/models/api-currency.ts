export interface APIRequestCurrency {
    abbrevation: string;
    amount: number;
};

export interface APIResponceCurrency extends APIRequestCurrency {
    fullName: string;
};
