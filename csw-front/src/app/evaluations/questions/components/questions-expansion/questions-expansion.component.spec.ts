import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsExpansionComponent } from './questions-expansion.component';

describe('QuestionsExpansionComponent', () => {
  let component: QuestionsExpansionComponent;
  let fixture: ComponentFixture<QuestionsExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
