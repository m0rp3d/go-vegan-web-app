import { AbstractControl, FormGroup } from "@angular/forms";

export function passwordValidator(passForm: FormGroup): { [key: string]: boolean } | null {
  let password: string;
  let confirmPassword: string;

  password = passForm.get('password')?.value;
  confirmPassword = passForm.get('cpassword')?.value;

  //console.log("password is " + password);
  //console.log("confirm password is " + confirmPassword);

  // if the two password don't match
  // return true for the misMatch error
  if (password !== confirmPassword) {
    return { 'misMatch': true };
  }
  else {
    return null;
  }

}
