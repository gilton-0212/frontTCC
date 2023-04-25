import { TestBed } from '@angular/core/testing';

import { TipoestabelecimentoService } from './tipoestabelecimento.service';

describe('TipoestabelecimentoService', () => {
  let service: TipoestabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoestabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
