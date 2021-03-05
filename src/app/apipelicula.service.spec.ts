import { TestBed } from '@angular/core/testing';

import { APIpeliculaService } from './apipelicula.service';

describe('APIpeliculaService', () => {
  let service: APIpeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIpeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
