import { createAction, props } from "@ngrx/store";
import { APIResponceCurrency } from "src/app/core/services/models/api-currency";

enum CurrenciesActionTypes {
    UpdateCurrencies = 'Update Currency',
};

const updateCurrencies = createAction(
    CurrenciesActionTypes.UpdateCurrencies,
    props<{ currencies: APIResponceCurrency[] }>(),
);

const currenciesActionsMap = {
    update: updateCurrencies,
};

export default currenciesActionsMap;
