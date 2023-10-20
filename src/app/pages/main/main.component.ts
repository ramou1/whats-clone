import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { SettingsPage } from './settings/settings.page';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { ContactsPage } from './contacts/contacts.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

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
    this.popoverCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: ContactsPage,
    });

    await modal.present();
  }

  public closeModal(): void {
    this.modalCtrl.dismiss();
  }

}
