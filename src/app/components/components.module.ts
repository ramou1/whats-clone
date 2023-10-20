import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SocialLoginComponent } from "./social-login/social-login.component";
import { ContactListComponent } from "./contact-list/contact-list.component";

@NgModule({
    declarations: [
        ContactListComponent,
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
        ContactListComponent,
        SocialLoginComponent
    ]
})

export class ComponentsModule { }