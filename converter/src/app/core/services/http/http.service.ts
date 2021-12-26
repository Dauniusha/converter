import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import currenciesActionsMap from 'src/app/redux/actions/currency.actions';
import { AppState } from 'src/app/redux/state.models';
import STRING_CONSTANTS from 'src/app/settings/constants/string.constants';
import { APIRequestCurrency, APIResponceCurrency } from '../models/api-currency';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) { };

    public update(updatedCurrency: APIRequestCurrency) {
        this.httpClient.post<APIResponceCurrency[]>(STRING_CONSTANTS.apiPath, updatedCurrency)
        .subscribe((data: APIResponceCurrency[]) => this.store.dispatch(currenciesActionsMap.update({ currencies: data })));
    };
};
