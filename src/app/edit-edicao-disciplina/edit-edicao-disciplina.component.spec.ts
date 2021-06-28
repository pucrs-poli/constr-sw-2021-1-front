import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEdicaoDisciplinaComponent } from './edit-edicao-disciplina.component';

describe('EditEdicaoDisciplinaComponent', () => {
  let component: EditEdicaoDisciplinaComponent;
  let fixture: ComponentFixture<EditEdicaoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEdicaoDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEdicaoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
