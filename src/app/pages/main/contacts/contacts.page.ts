import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public allContacts: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.allContacts = [
      { name: 'John Doe', email: 'john@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg", notReadedMessages: 12 }, 
      { name: 'Maria Clara', email: 'maria@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg", notReadedMessages: 2 },
      { name: 'João da Silva', email: 'joao@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg", notReadedMessages: 0 },
    ];
  }

  public closeModal(): void {
    this.modalCtrl.dismiss();
  }

}