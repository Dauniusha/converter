import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CurrenciesState } from 'src/app/redux/state.models';
import { HttpService } from '../services/http/http.service';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
    public abbrevations: string[] = [];

    public currencies: Observable<CurrenciesState> = this.store.select((state: AppState) => state.currencies);

    constructor(
        private httpService: HttpService,
        private store: Store<AppState>,
    ) { };

    ngOnInit(): void {
        this.httpService.update({ abbrevation: 'BYN', amount: 1 });
    };
};
