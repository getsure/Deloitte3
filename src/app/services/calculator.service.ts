import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  addOperation(firstNo:number, secondNo:number):number{
    return firstNo+secondNo;
  }
  subOperation(firstNo:number, secondNo:number):number{
    return firstNo-secondNo;
  }
}
