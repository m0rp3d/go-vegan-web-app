import { FormControl } from "@angular/forms";

// custom validator checks to make sure entered input is 3 - 4 digits,
// used to check credit card security code
export function checkCode(control: FormControl): { [key: string]: boolean } | null {
  
  let code = control.value;

  if (code < 100 || code > 9999) {
    return { wrongCodeLength: true };
  }

  return null;
}
