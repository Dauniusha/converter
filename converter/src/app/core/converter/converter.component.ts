import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CurrenciesState } from 'src/app/redux/state.models';
import STRING_CONSTANTS from 'src/app/settings/constants/string.constants';
import { HttpService } from '../services/http/http.service';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
    public abbreviations: string[] = STRING_CONSTANTS.initialCurrency;

    public additionalCurrencies: string[] = [];

    public currencies: Observable<CurrenciesState> = this.store.select((state: AppState) => state.currencies);

    constructor(
        private httpService: HttpService,
        private store: Store<AppState>,
    ) { };

    public ngOnInit(): void {
        this.httpService.update({ abbreviation: 'BYN', amount: 1 });

        this.currencies.subscribe((data) => {
            const allAbbreviations = Object.keys(data);
            this.additionalCurrencies = allAbbreviations.filter((abb) => !this.abbreviations.includes(abb));
        });
    };

    public addCurrency(abbreviation: string) {
        this.abbreviations.push(abbreviation);
        this.additionalCurrencies = this.additionalCurrencies.filter((abb) => abbreviation !== abb);
    };
};
