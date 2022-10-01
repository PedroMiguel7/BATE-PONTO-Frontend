import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoUserComponent } from './grafico-user.component';

describe('GraficoUserComponent', () => {
  let component: GraficoUserComponent;
  let fixture: ComponentFixture<GraficoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
