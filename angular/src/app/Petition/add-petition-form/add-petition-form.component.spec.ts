import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetitionFormComponent } from './add-petition-form.component';

describe('AddPetitionFormComponent', () => {
  let component: AddPetitionFormComponent;
  let fixture: ComponentFixture<AddPetitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


