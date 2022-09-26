import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioUserComponent } from './calendario-user.component';

describe('CalendarioUserComponent', () => {
  let component: CalendarioUserComponent;
  let fixture: ComponentFixture<CalendarioUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
