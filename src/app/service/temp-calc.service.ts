import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempCalcService {
  constructor() { }

  public convertFToC(fahrenheit: number): number {
    return ((fahrenheit as number) - 32) * 5 / 9;
  }

  public convertFToK(fahrenheit: number): number{
    return this.convertCToK(this.convertFToC(fahrenheit as number));
  }

  public convertCToF(celsius: number): number {
    return (celsius as number) * 1.8000 + 32;
  }

  public convertCToK(celsius: number): number {
    return (celsius as number) + 273.15;
  }

  public convertKToF(kelvin: number): number {
    return this.convertCToF(this.convertKToC(kelvin as number));
  }

  public convertKToC(kelvin: number): number {
    return (kelvin as number) - 273.15;
  }
}
