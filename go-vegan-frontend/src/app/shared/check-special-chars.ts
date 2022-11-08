import { FormControl } from "@angular/forms";


export function nameValidator(control: FormControl): { [key: string]: boolean } | null {
  // checks if input contains any of the listed characters
  const nameRegexp: RegExp = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/;

  //console.log(control.value);

  // if control.value contains any of the RegExp characters
  // return true for invalidName
  if (control.value && nameRegexp.test(control.value)) {
    return { invalidName: true };
  }

  return null;
}
