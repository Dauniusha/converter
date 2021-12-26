import { initialCurrenciesState } from "../settings/state/initial";

export interface CurrenciesState {
    [key: string]: CurrencyInfo;
};

interface CurrencyInfo {
    amount: number;
    name: string;
};

export interface AppState {
    currencies: CurrenciesState;
};

const initialAppState: AppState = {
    currencies: initialCurrenciesState,
};

export default initialAppState;
