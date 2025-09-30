import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function usernameValidator(param: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const minLength = Validators.minLength(5);
        const minLengthError = minLength(control);
        if (minLengthError) {
            // min length hatası var, diğer kontrolleri yapma
            return { 'invalidUsername': { 'message': `Kullanıcı adı en az 5 karakter olmalıdır!!!!!!` } };
        }
        const value = control.value;
        const hata = new RegExp('\\' + param, 'i').test(value);
        if (value && hata) {
            return { 'invalidUsername': { 'message': `Kullanıcı adı ${param} karakteri içeremez` } };
        }

        return null;
    }
}
