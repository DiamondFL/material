/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SingerService } from './singer.service';

describe('SingerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingerService]
    });
  });

  it('should ...', inject([SingerService], (service: SingerService) => {
    expect(service).toBeTruthy();
  }));
});
