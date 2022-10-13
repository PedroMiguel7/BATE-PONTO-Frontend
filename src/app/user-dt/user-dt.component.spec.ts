import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDtComponent } from './user-dt.component';

describe('UserDtComponent', () => {
  let component: UserDtComponent;
  let fixture: ComponentFixture<UserDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
