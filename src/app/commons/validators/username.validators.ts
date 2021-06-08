import {AbstractControl, ValidationErrors} from "@angular/forms";


export class UsernameValidators {
  static noSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") != -1 ){
      return {noSpace: true}
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // simulate server side checking of username uniqueness
      setTimeout(() => {
        if (control.value === 'Jonathan') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null)
        }
      }, 5000);
    })
  }
}
