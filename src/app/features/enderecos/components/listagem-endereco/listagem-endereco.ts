import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EnderecoViaCep } from '../../interfaces/enderecos.interface';

@Component({
  selector: 'app-listagem-endereco',
  imports: [MatTableModule, DatePipe],
  templateUrl: './listagem-endereco.html',
  styleUrl: './listagem-endereco.scss'
})
export class ListagemEndereco {
  listaEnderecos = input<EnderecoViaCep[]>([]);

  displayedColumns: string[] = ['cep', 'endereco', 'data'];
}
