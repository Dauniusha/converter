import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './converter/components/currency/currency.component';
import { ConverterComponent } from './converter/converter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CurrencyComponent,
    ConverterComponent
  ],
  
  imports: [
    CommonModule,
    
    MatMenuModule,
    MatIconModule
  ],

  exports: [
    CurrencyComponent,
    ConverterComponent
  ]
})
export class CoreModule { }
