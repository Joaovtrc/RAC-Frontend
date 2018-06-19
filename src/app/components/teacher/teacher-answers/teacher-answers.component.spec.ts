import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAnswersComponent } from './teacher-answers.component';

describe('TeacherAnswersComponent', () => {
  let component: TeacherAnswersComponent;
  let fixture: ComponentFixture<TeacherAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
