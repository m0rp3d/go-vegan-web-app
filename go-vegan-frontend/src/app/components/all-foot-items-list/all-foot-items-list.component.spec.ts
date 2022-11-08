import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFootItemsListComponent } from './all-foot-items-list.component';

describe('AllFootItemsListComponent', () => {
  let component: AllFootItemsListComponent;
  let fixture: ComponentFixture<AllFootItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFootItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFootItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
