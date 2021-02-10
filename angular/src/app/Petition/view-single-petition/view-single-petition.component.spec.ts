import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePetitionComponent } from './view-single-petition.component';

describe('ViewSinglePetitionComponent', () => {
  let component: ViewSinglePetitionComponent;
  let fixture: ComponentFixture<ViewSinglePetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSinglePetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSinglePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
