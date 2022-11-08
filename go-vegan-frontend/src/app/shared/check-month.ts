import { FormControl } from "@angular/forms";

// custom validator function to check if the entered month is correct
export function checkMonth(control: FormControl): { [key: string]: boolean } | null {
  // expMonth assigned the entered value
  let expMonth = control.value;

  //console.log("expMonth is " + expMonth)

  if (expMonth < 1 || expMonth > 12) {
    //if the month is not between(inclusive) 1-12
    // than the month is incorrect
    //console.log("expMonth is incorrect with value of " + expMonth)
    return { wrongExpirationMonth: true };
  }

  return null;
}
