import { TestBed } from '@angular/core/testing';

import { TransferHttpSsrInterceptorService } from './transfer-http-ssr-interceptor.service';

describe('TransferHttpSsrInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferHttpSsrInterceptorService = TestBed.get(TransferHttpSsrInterceptorService);
    expect(service).toBeTruthy();
  });
});
