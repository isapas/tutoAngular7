import { TestBed } from '@angular/core/testing';

import { MessgeService } from './message.service';

describe('MessgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessgeService = TestBed.get(MessgeService);
    expect(service).toBeTruthy();
  });
});
