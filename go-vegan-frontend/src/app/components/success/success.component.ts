import { Component, OnInit } from '@angular/core';
import { PassMessageService } from '../../services/pass-message.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  message = '';

  constructor(private passMessage: PassMessageService) { }

  ngOnInit(): void {
    this.passMessage.share.subscribe(data => this.message = data);
  }

}
