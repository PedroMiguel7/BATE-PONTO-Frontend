import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPessoaComponent } from './edit-pessoa.component';

describe('EditPessoaComponent', () => {
  let component: EditPessoaComponent;
  let fixture: ComponentFixture<EditPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
