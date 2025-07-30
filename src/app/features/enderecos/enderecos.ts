import { Component, signal } from '@angular/core';
import { BuscaCep } from './components/busca-cep/busca-cep';
import { ListagemEndereco } from './components/listagem-endereco/listagem-endereco';
import { EnderecoViaCep } from './interfaces/enderecos.interface';
import { enderecosService } from './services/enderecos';

@Component({
  selector: 'app-enderecos',
  imports: [BuscaCep, ListagemEndereco],
  templateUrl: './enderecos.html',
  styleUrl: './enderecos.scss'
})

export class Enderecos {

  listaEnderecos = signal<EnderecoViaCep[]>([]);

  constructor(private enderecosService: enderecosService) {}

  onCepSearched(cep: string) {
    console.log('Buscando CEP:', cep);

    this.enderecosService.buscarPorCep(cep).subscribe({
      next: (endereco: EnderecoViaCep) => {
        this.listaEnderecos.update(currentList => [...currentList, endereco]);
        console.log('Endereço encontrado:', endereco);
      },
      error: (error: Error) => {
        console.error('Erro ao buscar CEP:', error.message);
      }
    });
  }
}
