import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettionHomeComponent } from './pettion-home.component';

describe('PettionHomeComponent', () => {
  let component: PettionHomeComponent;
  let fixture: ComponentFixture<PettionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
