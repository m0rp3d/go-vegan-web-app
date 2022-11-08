import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountAddressComponent } from './update-account-address.component';

describe('UpdateAccountAddressComponent', () => {
  let component: UpdateAccountAddressComponent;
  let fixture: ComponentFixture<UpdateAccountAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccountAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
