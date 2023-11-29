import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateIssueComponent } from './dialog-create-issue.component';

describe('DialogCreateIssueComponent', () => {
  let component: DialogCreateIssueComponent;
  let fixture: ComponentFixture<DialogCreateIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateIssueComponent]
    });
    fixture = TestBed.createComponent(DialogCreateIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
