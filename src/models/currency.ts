export interface RequestCurrency {
    abbreviation: string;
    amount: number;
};

export interface ResponseCurrency extends RequestCurrency {
    name: string;
};
