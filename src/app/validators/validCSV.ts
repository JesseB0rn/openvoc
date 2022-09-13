import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CSVToArray } from '../utilities/csv-parser';

export function validCSVValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? { forbiddenName: { value: control.value } } : null;
    try {
      CSVToArray(control.value, '\t');
      return null;
    } catch (err: any) {
      console.error(err);
      return {
        invalidCSV: { value: control.value },
      };
    }
  };
}
