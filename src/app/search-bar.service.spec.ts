/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchBarService } from './search-bar.service';

describe('SearchBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBarService]
    });
  });

  it('should ...', inject([SearchBarService], (service: SearchBarService) => {
    expect(service).toBeTruthy();
  }));
});
