import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsDisciplinaComponent } from './list-students-disciplina.component';

describe('ListStudentsDisciplinaComponent', () => {
  let component: ListStudentsDisciplinaComponent;
  let fixture: ComponentFixture<ListStudentsDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentsDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentsDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
