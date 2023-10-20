import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit {

  @Input() type?: string = '';

  constructor() { }

  ngOnInit() { }

  async googleLogin() {
  }

  async appleLogin() {
  }

  async fbLogin() {
  }

}
