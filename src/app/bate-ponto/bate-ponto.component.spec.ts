import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatePontoComponent } from './bate-ponto.component';

describe('BatePontoComponent', () => {
  let component: BatePontoComponent;
  let fixture: ComponentFixture<BatePontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatePontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatePontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
