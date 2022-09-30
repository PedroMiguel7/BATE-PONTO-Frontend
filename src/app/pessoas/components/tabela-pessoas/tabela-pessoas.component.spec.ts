import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPessoasComponent } from './tabela-pessoas.component';

describe('TabelaPessoasComponent', () => {
  let component: TabelaPessoasComponent;
  let fixture: ComponentFixture<TabelaPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
