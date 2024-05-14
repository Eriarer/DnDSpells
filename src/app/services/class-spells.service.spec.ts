import { TestBed } from '@angular/core/testing';

import { ClassSpellsService } from './class-spells.service';

describe('ClassSpellsService', () => {
  let service: ClassSpellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassSpellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
