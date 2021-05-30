import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourseTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourseTwo];

      if (firstNumber + secondNumber === parseInt(sum, 10)) {
        return null;
      }

      return { addition: true };
    };
  }
}
