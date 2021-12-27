import { createReducer, on } from "@ngrx/store";
import { initialCurrenciesState } from "src/app/settings/state/initial";
import currenciesActionsMap from "../../actions/currency.actions";
import { CurrenciesState } from "../../state.models";

const currenciesReducer = createReducer(
    initialCurrenciesState,
    on(currenciesActionsMap.update, (state: CurrenciesState, { currencies }) => {
        return currencies.reduce((acc, apiCurrency) => {
            return {
                ...acc,
                [apiCurrency.abbreviation]: {
                    amount: apiCurrency.amount,
                    name: apiCurrency.name,
                },
            }
        }, { ...state });
    })
);

export default currenciesReducer;
