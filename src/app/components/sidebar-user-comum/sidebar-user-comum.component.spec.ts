import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUserComumComponent } from './sidebar-user-comum.component';

describe('SidebarUserComumComponent', () => {
  let component: SidebarUserComumComponent;
  let fixture: ComponentFixture<SidebarUserComumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUserComumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUserComumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
