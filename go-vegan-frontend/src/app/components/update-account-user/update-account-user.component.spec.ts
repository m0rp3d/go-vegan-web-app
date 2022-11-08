import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountUserComponent } from './update-account-user.component';

describe('UpdateAccountUserComponent', () => {
  let component: UpdateAccountUserComponent;
  let fixture: ComponentFixture<UpdateAccountUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
