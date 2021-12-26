import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './converter/components/currency/currency.component';
import { ConverterComponent } from './converter/converter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrencyComponent,
    ConverterComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    
    MatMenuModule,
    MatIconModule
  ],

  exports: [
    CurrencyComponent,
    ConverterComponent
  ]
})
export class CoreModule { }
