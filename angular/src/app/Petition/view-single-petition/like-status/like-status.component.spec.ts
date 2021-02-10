import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeStatusComponent } from './like-status.component';

describe('LikeStatusComponent', () => {
  let component: LikeStatusComponent;
  let fixture: ComponentFixture<LikeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
