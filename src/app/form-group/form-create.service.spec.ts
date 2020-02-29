import { TestBed } from '@angular/core/testing';

import { FormCreateService } from './form-create.service';

describe('FormCreateService', () => {
  let service: FormCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
