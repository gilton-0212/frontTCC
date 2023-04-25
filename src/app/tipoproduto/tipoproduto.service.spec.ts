import { TestBed } from '@angular/core/testing';

import { TipoprodutoService } from './tipoproduto.service';

describe('TipoprodutoService', () => {
  let service: TipoprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
