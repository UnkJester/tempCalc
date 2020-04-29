import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempCalcComponent } from './temp-calc/temp-calc.component';
import { FormsModule } from '@angular/forms';
import { TempCalcService } from './service/temp-calc.service';

@NgModule({
  declarations: [
    AppComponent,
    TempCalcComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [TempCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
