import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public abbrevation: string = '';

  public value: number = 0;

  public fullName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
