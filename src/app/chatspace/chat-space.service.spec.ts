import { TestBed } from '@angular/core/testing';

import { ChatSpaceService } from './chat-space.service';

describe('ChatSpaceService', () => {
  let service: ChatSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
