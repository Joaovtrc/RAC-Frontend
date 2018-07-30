import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConversationsComponent } from './dialog-conversations.component';

describe('DialogConversationsComponent', () => {
  let component: DialogConversationsComponent;
  let fixture: ComponentFixture<DialogConversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConversationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
