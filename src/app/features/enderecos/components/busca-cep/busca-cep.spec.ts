import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCep } from './busca-cep';

describe('BuscaCep', () => {
  let component: BuscaCep;
  let fixture: ComponentFixture<BuscaCep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaCep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaCep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
