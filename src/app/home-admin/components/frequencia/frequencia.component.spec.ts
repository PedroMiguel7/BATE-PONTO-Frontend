import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciaComponent } from './frequencia.component';

describe('FrequenciaComponent', () => {
  let component: FrequenciaComponent;
  let fixture: ComponentFixture<FrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
