import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { SettingsPage } from './settings/settings.page';
import { ContactsPage } from './contacts/contacts.page';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
    {
        path: APP_ROUTES.CHAT,
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
    },
    {
        path: APP_ROUTES.SETTINGS,
        component: SettingsPage
    },
    {
        path: APP_ROUTES.STATUS,
        loadChildren: () => import('./status/status.module').then(m => m.StatusPageModule)
    },
    {
        path: APP_ROUTES.CALLS,
        loadChildren: () => import('./calls/calls.module').then(m => m.CallsPageModule)
    },
    {
        path: APP_ROUTES.CONTACTS,
        component: ContactsPage
    },
    {
        path: '',
        redirectTo: APP_ROUTES.CHAT,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        SettingsPage,
        ContactsPage,
    ]
})
export class MainModule { }