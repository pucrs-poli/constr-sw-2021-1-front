import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEdicaoDisciplinaComponent } from './list-edicao-disciplina.component';

describe('ListEdicaoDisciplinaComponent', () => {
  let component: ListEdicaoDisciplinaComponent;
  let fixture: ComponentFixture<ListEdicaoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEdicaoDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEdicaoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
