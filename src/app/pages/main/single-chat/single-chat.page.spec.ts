import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleChatPage } from './single-chat.page';

describe('SingleChatPage', () => {
  let component: SingleChatPage;
  let fixture: ComponentFixture<SingleChatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
