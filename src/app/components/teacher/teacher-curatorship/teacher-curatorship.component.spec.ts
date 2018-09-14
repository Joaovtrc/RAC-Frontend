import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCuratorshipComponent } from './teacher-curatorship.component';

describe('TeacherCuratorshipComponent', () => {
  let component: TeacherCuratorshipComponent;
  let fixture: ComponentFixture<TeacherCuratorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCuratorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCuratorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
