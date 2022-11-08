import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountCreditComponent } from './update-account-credit.component';

describe('UpdateAccountCreditComponent', () => {
  let component: UpdateAccountCreditComponent;
  let fixture: ComponentFixture<UpdateAccountCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
