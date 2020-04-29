import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCalcComponent } from './temp-calc.component';

describe('TempCalcComponent', () => {
  let component: TempCalcComponent;
  let fixture: ComponentFixture<TempCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
