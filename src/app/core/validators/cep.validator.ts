import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cepValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const cepValue = control.value.toString().trim();
    const cepNumerico = cepValue.replace(/\D/g, '');
    const cepRegex = /^[\d-]+$/;
    if (!cepRegex.test(cepValue)) {
      return {
        cepInvalido: {
          message: 'CEP deve conter apenas números e hífen',
          value: cepValue
        }
      };
    }
    if (cepNumerico.length !== 8) {
      return {
        cepTamanhoInvalido: {
          message: 'CEP deve ter exatamente 8 dígitos',
          value: cepValue,
          length: cepNumerico.length
        }
      };
    }
    if (/^(\d)\1{7}$/.test(cepNumerico)) {
      return {
        cepSequenciaInvalida: {
          message: 'CEP não pode ter todos os dígitos iguais',
          value: cepValue
        }
      };
    }

    return null;
  };
}

export function cepInputValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const cepValue = control.value.toString();

    const validCharsRegex = /^[\d-]*$/;
    if (!validCharsRegex.test(cepValue)) {
      return {
        caracteresInvalidos: {
          message: 'Digite apenas números',
          value: cepValue
        }
      };
    }

    return null;
  };
}

export class CepUtils {
  static formatCep(cep: string): string {
    if (!cep) return '';
    const numbers = cep.replace(/\D/g, '');
    if (numbers.length > 5) {
      return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
    } else {
      return numbers;
    }
  }

  static cleanCep(cep: string): string {
    if (!cep) return '';
    return cep.replace(/\D/g, '');
  }

  static isValidCep(cep: string): boolean {
    if (!cep) return false;
    const cleanCep = this.cleanCep(cep);
    return cleanCep.length === 8 && !/^(\d)\1{7}$/.test(cleanCep);
  }
}
