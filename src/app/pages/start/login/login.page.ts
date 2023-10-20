import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(public fb: FormBuilder, public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  async openRegister() {
    this.router.navigate([`${APP_ROUTES.START}/${APP_ROUTES.REGISTER}`]);
  }

  login() {
    this.navCtrl.navigateRoot(APP_ROUTES.MAIN);
  }

}
