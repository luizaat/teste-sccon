import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { EnderecoViaCep } from '../interfaces/enderecos.interface';

@Injectable({
  providedIn: 'root'
})
export class enderecosService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  buscarPorCep(cep: string): Observable<EnderecoViaCep> {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      return throwError(() => new Error('CEP deve conter 8 dígitos'));
    }

    const url = `${this.baseUrl}/${cepLimpo}/json/`;

    return this.http.get<EnderecoViaCep>(url).pipe(
      map(response => {
        if (response.erro) {
          throw new Error('CEP não encontrado');
        }
        return {
          ...response,
          dataBusca: new Date()
        };
      }),
      catchError(error => {
        console.error('Erro ao buscar CEP:', error);
        return throwError(() => error);
      })
    );
  }
}
