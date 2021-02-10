import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionCategoryComponent } from './petition-category.component';

describe('PetitionCategoryComponent', () => {
  let component: PetitionCategoryComponent;
  let fixture: ComponentFixture<PetitionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
