import { FormControl } from "@angular/forms";

// custom validator that checks if the entered year is expired
export function checkExpired(control: FormControl): { [key: string]: boolean } | null {

  // assign expYear the entered year
  let expYear = control.value;

  let currentTime = new Date();

  // get the current year in real time
  let currYear: number = currentTime.getFullYear();
  
  //console.log(expYear);

  
  if (control.value < currYear) {
    // if the entered year is below the current year
    // return expired: true
    return { expired: true };
  } else if (expYear > currYear + 4) {
    // if the expYear is atleast 4 years above current year
    // means the epiration year is incorrect since credit card
    // expiration years are usually 3 - 4 years above current year
    return { incorrectExpiration: true };
  }

  return null;
}
