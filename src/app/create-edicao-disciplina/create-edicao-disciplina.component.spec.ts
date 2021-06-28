import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEdicaoDisciplinaComponent } from './create-edicao-disciplina.component';

describe('CreateEdicaoDisciplinaComponent', () => {
  let component: CreateEdicaoDisciplinaComponent;
  let fixture: ComponentFixture<CreateEdicaoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEdicaoDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEdicaoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
