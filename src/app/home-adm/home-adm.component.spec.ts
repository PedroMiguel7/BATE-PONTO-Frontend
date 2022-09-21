import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdmComponent } from './home-adm.component';

describe('HomeAdmComponent', () => {
  let component: HomeAdmComponent;
  let fixture: ComponentFixture<HomeAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
