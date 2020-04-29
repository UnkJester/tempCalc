import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempCalcService {
  constructor() { }

  public convertFToC(fahrenheit: number) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  public convertFToK(fahrenheit: number) {
    return this.convertCToK(this.convertFToC(fahrenheit));
  }

  public convertCToF(celsius: number) {
    return celsius * 1.8000 + 32;
  }

  public convertCToK(celsius: number) {
    return celsius + 273.15;
  }

  public convertKToF(kelvin: number) {
    return this.convertCToF(this.convertKToC(kelvin));
  }

  public convertKToC(kelvin: number) {
    return kelvin - 273.15;
  }
}
