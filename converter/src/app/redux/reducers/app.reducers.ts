import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state.models";
import currenciesReducer from "./models/currency.reducers";

const appReducers: ActionReducerMap<AppState> = {
    currencies: currenciesReducer,
};

export default appReducers
