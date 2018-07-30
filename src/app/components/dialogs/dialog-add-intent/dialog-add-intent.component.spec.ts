import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddIntentComponent } from './dialog-add-intent.component';

describe('DialogAddIntentComponent', () => {
  let component: DialogAddIntentComponent;
  let fixture: ComponentFixture<DialogAddIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
