import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(public fb: FormBuilder, public navCtrl: NavController, public router: Router, private userSrvc: UserService, private loader: LoaderService, private authSrvc: AuthService, private toastSrvc: ToastService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      phone: ['', [Validators.minLength(8), Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    }, { validators: this.checkPasswords });
  }

  public checkPasswords(group: FormGroup) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("repeatPassword")?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  async openLogin() {
    this.router.navigate([`${APP_ROUTES.START}/${APP_ROUTES.LOGIN}`]);
  }

  register() {
    this.loader.presentLoader();
    const formData = this.registerForm.value;

    // this.authSrvc.registerUser(formData).then(async (res2) => {
    //   const uid = await this.userSrvc.getUid();
    //   this.userSrvc.addOrUpdateDocument({ id: uid, customerId: res?.id });

    //   if (res2.error) {
    //     console.log(res2);
    //     // this.toastSrvc.presentToast(res2.message, true);
    //     this.loader.hideLoader();
    //   }
    //   else {
    //     this.navCtrl.navigateRoot(APP_ROUTES.MAIN);
    //   }
    // });
  }

}
