import { Component, OnInit } from '@angular/core';
import {TempCalcService} from '../service/temp-calc.service';

@Component({
  selector: 'app-temp-calc',
  templateUrl: './temp-calc.component.html',
  styleUrls: ['./temp-calc.component.css']
})
export class TempCalcComponent implements OnInit {
  fahrenheit: number;
  celsius: number;
  kelvin: number;
  constructor(private calcService: TempCalcService) { }

  ngOnInit(): void {
    this.fahrenheit = 32;
    this.celsius = 0;
    this.kelvin = 273.15;
  }

  changeF() {
    if (!isNaN(this.fahrenheit)) {
      this.celsius = Math.round(this.calcService.convertFToC(this.fahrenheit) * 100) / 100;
      this.kelvin = Math.round(this.calcService.convertFToK(this.fahrenheit) * 100) / 100;
    }
  }

  changeK() {
    if (!isNaN(this.kelvin)) {
      this.fahrenheit = Math.round(this.calcService.convertKToF(this.kelvin) * 100) / 100;
      this.celsius = Math.round(this.calcService.convertKToC(this.kelvin) * 100) / 100;
    }
  }

  changeC() {
    if (!isNaN(this.celsius)) {
      this.fahrenheit = Math.round(this.calcService.convertCToF(this.celsius) * 100) / 100;
      this.kelvin = Math.round(this.calcService.convertCToK(this.celsius) * 100) / 100;
    }
  }

}
