import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsDataComponent } from './list-students-data.component';

describe('ListStudentsDataComponent', () => {
  let component: ListStudentsDataComponent;
  let fixture: ComponentFixture<ListStudentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
