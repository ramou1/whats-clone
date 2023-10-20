import { Injectable, Injector } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { NavController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { APP_ROUTES } from '../constants/routes.const';
import { ApiService } from './api.service';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService extends FirestoreService {

  constructor(private injector: Injector, private navCtrl: NavController, private auth: Auth, private apiService: ApiService) { 
    super(injector);
    this.setCollectionRef('users');
  }

  async getAuthorization() {
    const idToken = await this.getIdToken();
    return { Authorization: 'Bearer ' + idToken };
  }

  // async getUserSnap(docId?: string) {
  //   let idUser = docId;

  //   if (!idUser) {
  //     idUser = await this.getUid();f
  //   }
  //   let docRef = doc(this.collectionRef, idUser);

  //   const docSnap = docSnapshots(docRef);
  //   return docSnap;
  // }

  async getUserState(): Promise<User | null> {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      })
    })
  }

  async getUid(): Promise<string | any> {
    const user = await this.getUserState();
    if (!user) return null;
    return user?.uid;
  }

  async getIdToken() {
    const user = await this.getUserState();
    if (!user) return null;
    return user.getIdToken(true);
  }

  async createUser(user: any, password: string) {
    const params = {
      displayName: user.name,
      email: user.email,
      password
    };
    const header = await this.getAuthorization();
    return this.apiService.post(environment.apiUrl + "/v1/admin/user", params, header);
  }

  async deleteUser() {
    const userData = await this.getUserState();
    this.navCtrl.navigateRoot(APP_ROUTES.START);
    // await this.deleteDocument(userData.uid);
  }

  async checkUsedMail(email: string) {
    const users = await this.load();  
    return users.find((user: any) => user.email === email);
  }


}
