import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SocialLoginComponent } from "./social-login/social-login.component";

@NgModule({
    declarations: [
        SocialLoginComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        SocialLoginComponent
    ]
})

export class ComponentsModule { }