import { TestBed } from '@angular/core/testing';

import { Assignment025Service } from './assignment025.service';

describe('Assignment025Service', () => {
  let service: Assignment025Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assignment025Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
