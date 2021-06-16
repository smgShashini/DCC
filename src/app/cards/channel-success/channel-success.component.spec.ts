import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSuccessComponent } from './channel-success.component';

describe('ChannelSuccessComponent', () => {
  let component: ChannelSuccessComponent;
  let fixture: ComponentFixture<ChannelSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
