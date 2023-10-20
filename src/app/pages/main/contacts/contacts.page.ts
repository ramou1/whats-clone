import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public contacts: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = [
      { name: 'John Doe', email: 'john@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg" }, 
      { name: 'Maria Clara', email: 'maria@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { name: 'João da Silva', email: 'joao@gmail.com', photo: "https://ionicframework.com/docs/img/demos/avatar.svg" },
    ];
  }

  public closeModal(): void {
    this.modalCtrl.dismiss();
  }

}