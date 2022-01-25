/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TweetSupplierService } from './tweetSupplier.service';

describe('Service: TweetSupplier', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetSupplierService]
    });
  });

  it('should ...', inject([TweetSupplierService], (service: TweetSupplierService) => {
    expect(service).toBeTruthy();
  }));
});
