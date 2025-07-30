import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEndereco } from './listagem-endereco';

describe('ListagemEndereco', () => {
  let component: ListagemEndereco;
  let fixture: ComponentFixture<ListagemEndereco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemEndereco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEndereco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
