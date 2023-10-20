import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent  implements OnInit {

  @Input() contacts: any = [];
  @Input() type?: string = '';

  constructor() { }

  ngOnInit() {
    console.log('Received: ', this.type, this.contacts);
  }

}
