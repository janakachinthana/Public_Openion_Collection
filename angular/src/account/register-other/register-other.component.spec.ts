import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOtherComponent } from './register-other.component';

describe('RegisterOtherComponent', () => {
  let component: RegisterOtherComponent;
  let fixture: ComponentFixture<RegisterOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
