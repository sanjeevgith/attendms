import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
       {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingModule)
      },
       {
        path: 'analytics',
        loadChildren: () => import('../analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../library/library.module').then(m => m.LibraryModule)
      },
       {
        path: 'helpdesk',
        loadChildren: () => import('../helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
      },
       {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule)
      },
       {
        path: 'calender',
        loadChildren: () => import('../calender/calender.module').then(m => m.CalenderModule)
      },
       {
        path: 'message',
        loadChildren: () => import('../message/message.module').then(m => m.MessageModule)
      },
      {
        path:'**',
        component:LoginComponent
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
