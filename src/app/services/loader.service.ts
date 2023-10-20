import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  public async presentTemporaryLoader(): Promise<void> {
      const load = await this.loadingCtrl.create({
          cssClass: 'custom-loader',
          spinner: 'crescent',
          duration: 4000,
      });

      await load.present();
  }

  public async presentLoader(): Promise<void> {
      if (this.loading) {
          return;
      }

      this.loading = await this.loadingCtrl.create({
          cssClass: 'custom-loader',
          spinner: 'crescent',
      });

      this.loading.present();
  }

  public async hideLoader() {
      try {
          if (this.loading) {
              this.loading = null;
              await this.loadingCtrl.dismiss();
          }
      } catch (err) {

      }
  }
}
