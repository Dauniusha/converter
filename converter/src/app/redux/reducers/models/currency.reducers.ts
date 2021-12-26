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
                [apiCurrency.abbrevation]: {
                    amount: apiCurrency.amount,
                    fullName: apiCurrency.fullName,
                },
            }
        }, {});
    })
);

export default currenciesReducer;
