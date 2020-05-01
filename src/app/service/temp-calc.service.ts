import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempCalcService {
  constructor() { }

  public convertFToC(fahrenheit: number): number {
    return ((Number(fahrenheit) - 32) * 5) / 9;
  }

  public convertFToK(fahrenheit: number): number{
    return this.convertCToK(this.convertFToC(Number(fahrenheit)));
  }

  public convertCToF(celsius: number): number {
    return Number(celsius) * 1.8000 + 32;
  }

  public convertCToK(celsius: number): number {
    return Number(celsius) + 273.15;
  }

  public convertKToF(kelvin: number): number {
    return this.convertCToF(this.convertKToC(Number(kelvin)));
  }

  public convertKToC(kelvin: number): number {
    return Number(kelvin) - 273.15;
  }
}
