
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMainComponent } from './teacher-main.component';

describe('TeacherMainComponent', () => {
  let component: TeacherMainComponent;
  let fixture: ComponentFixture<TeacherMainComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
