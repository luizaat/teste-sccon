import { TestBed } from '@angular/core/testing';

import { Enderecos } from './enderecos';

describe('Enderecos', () => {
  let service: Enderecos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Enderecos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
