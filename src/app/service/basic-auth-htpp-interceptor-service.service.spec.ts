import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorServiceService } from './basic-auth-htpp-interceptor-service.service';

describe('BasicAuthHtppInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHtppInterceptorServiceService = TestBed.get(BasicAuthHtppInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
