import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCuratorshipComponent } from './dialog-curatorship.component';

describe('DialogCuratorshipComponent', () => {
  let component: DialogCuratorshipComponent;
  let fixture: ComponentFixture<DialogCuratorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCuratorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCuratorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
