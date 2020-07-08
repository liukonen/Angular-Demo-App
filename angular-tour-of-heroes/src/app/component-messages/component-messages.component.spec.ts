import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMessagesComponent } from './component-messages.component';

describe('ComponentMessagesComponent', () => {
  let component: ComponentMessagesComponent;
  let fixture: ComponentFixture<ComponentMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
