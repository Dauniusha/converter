import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import currenciesActionsMap from 'src/app/redux/actions/currency.actions';
import { AppState } from 'src/app/redux/state.models';
import { APIRequestCurrency, APIResponceCurrency } from '../models/api-currency';

const API_PATH = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private httpClient: HttpClient,
        private store: Store<AppState>
    ) { };

    public update(updatedCurrency: APIRequestCurrency) {
        this.httpClient.post<APIResponceCurrency[]>(API_PATH, updatedCurrency)
        .subscribe((data: APIResponceCurrency[]) => this.store.dispatch(currenciesActionsMap.update({ currencies: data })));
    };
};
