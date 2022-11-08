import { TestBed } from '@angular/core/testing';

import { PassMessageService } from './pass-message.service';

describe('PassMessageService', () => {
  let service: PassMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
