import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { APP_ROUTES } from "src/app/constants/routes.const";
import { LoginPage } from "./login/login.page";
import { RegisterPage } from "./register/register.page";
import { ComponentsModule } from "src/app/components/components.module";

// const SHOW_ONBOARDING = localStorage.getItem(STORAGE.SHOW_ONBOARDING);
const INITIAL_ROUTE = APP_ROUTES.LOGIN;


const routes: Routes = [
  {
    path: APP_ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: APP_ROUTES.REGISTER,
    component: RegisterPage,
  },
  {
    path: '',
    redirectTo: INITIAL_ROUTE,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LoginPage,
    RegisterPage,
  ],
})
export class StartModule { }