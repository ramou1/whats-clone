import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: APP_ROUTES.CHAT,
                loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
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
                path: '',
                redirectTo: APP_ROUTES.CHAT,
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [
        MainComponent,
    ]
})
export class MainModule { }