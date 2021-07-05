import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAulaComponent } from './cadastrar-aula.component';

describe('CadastrarAulaComponent', () => {
  let component: CadastrarAulaComponent;
  let fixture: ComponentFixture<CadastrarAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
