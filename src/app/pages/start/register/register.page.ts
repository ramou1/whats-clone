import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(public fb: FormBuilder, public navCtrl: NavController, public router: Router) { }

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
    this.navCtrl.navigateRoot(APP_ROUTES.MAIN);
  }

}
