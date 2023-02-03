import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validate the addition result is equalt to 8', () => {
    const addResult = service.addOperation(6,2)
    expect(addResult).toBe(8)
  })

  it('validate the addition result is equalt to 9', () => {
    const addResult = service.addOperation(6,3)
    expect(addResult).toBe(9)
  })


});
