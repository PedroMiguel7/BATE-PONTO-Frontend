import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPessoaComponent } from './post-pessoa.component';

describe('PostPessoaComponent', () => {
  let component: PostPessoaComponent;
  let fixture: ComponentFixture<PostPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
