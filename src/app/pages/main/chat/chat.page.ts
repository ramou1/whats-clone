import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { ContactsPage } from '../contacts/contacts.page';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController, public navCtrl: NavController) { }

  ngOnInit() { }

  async openSettings() {
    this.popoverCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();
  }

  logout() {
    this.popoverCtrl.dismiss();
    this.closeModal();
    // this.authSrvc.doLogout();
    this.navCtrl.navigateRoot(APP_ROUTES.START);
  }

  async openContacts() {
    const modal = await this.modalCtrl.create({
      component: ContactsPage,
    });

    await modal.present();
  }

  public closeModal(): void {
    this.modalCtrl.dismiss();
  }

}
