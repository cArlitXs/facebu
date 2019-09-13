import { TestBed } from '@angular/core/testing';

import { AssistService } from './assist.service';

describe('AssistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssistService = TestBed.get(AssistService);
    expect(service).toBeTruthy();
  });
});
