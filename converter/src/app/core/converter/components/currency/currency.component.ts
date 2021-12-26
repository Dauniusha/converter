import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
    @Input() abbreviation: string = '';

    @Input() value: number = 0;

    @Input() name: string = '';

    public filterSubject: Subject<Event> = new Subject();

    constructor(
        private httpService: HttpService,
    ) { };

    ngOnInit(): void {
        this.filterSubject.pipe(
            map((event) => Number((<HTMLInputElement> event.target).value)),
            debounceTime(500),
            distinctUntilChanged()
        )
        .subscribe((amount: number) => this.httpService.update({ abbreviation: this.abbreviation, amount }))
    };
};
