import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { cepValidator, cepInputValidator, CepUtils } from '../../../../core/validators';

@Component({
  selector: 'app-busca-cep',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgClass],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  templateUrl: './busca-cep.html',
  styleUrl: './busca-cep.scss'
})
export class BuscaCep {
  cep: FormControl = new FormControl('', {
    validators: [
      Validators.required,
      cepInputValidator(),
      cepValidator()
    ]
  });

  cepEmitter = output<string>();
  isLoading = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.cep.markAsTouched();
    if (this.cep.invalid) {
      console.warn('CEP inválido:', this.cep.errors);
      return;
    }

    const cepValue = this.cep.value?.trim();
    if (!cepValue) {
      console.warn('CEP não informado');
      return;
    }
    const cepLimpo = CepUtils.cleanCep(cepValue);
    this.cepEmitter.emit(cepLimpo);
  }

  onCepInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const valor = input.value;

    const cepFormatado = CepUtils.formatCep(valor);
    this.cep.setValue(cepFormatado, { emitEvent: false });
    input.value = cepFormatado;
  }

  getErrorMessage(): string {
    if (this.cep.hasError('required')) {
      return 'CEP é obrigatório';
    }

    if (this.cep.hasError('caracteresInvalidos')) {
      return 'Digite apenas números';
    }

    if (this.cep.hasError('cepTamanhoInvalido')) {
      return 'CEP deve ter 8 dígitos';
    }

    if (this.cep.hasError('cepSequenciaInvalida')) {
      return 'CEP inválido';
    }

    if (this.cep.hasError('cepInvalido')) {
      return 'Formato de CEP inválido';
    }

    return '';
  }
}
