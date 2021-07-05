import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAulasComponent } from './listagem-aulas.component';

describe('ListagemAulasComponent', () => {
  let component: ListagemAulasComponent;
  let fixture: ComponentFixture<ListagemAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
