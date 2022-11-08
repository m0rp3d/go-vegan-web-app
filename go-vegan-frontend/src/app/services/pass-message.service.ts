import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassMessageService {

  // message is used to pass string to the 'SuccessComponent'
  private message = new BehaviorSubject<string>('');

  public share = this.message.asObservable();

  constructor() { }

  // function used to update the message BehaviorSubject
  // based on the component you navigate to 'SuccessComponent' from
  updateMessage(thisMessage: string) {
    this.message.next(thisMessage);
  }

}
