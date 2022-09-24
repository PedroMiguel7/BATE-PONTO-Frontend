import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatePontoUserComponent } from './bate-ponto-user.component';

describe('BatePontoUserComponent', () => {
  let component: BatePontoUserComponent;
  let fixture: ComponentFixture<BatePontoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatePontoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatePontoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
