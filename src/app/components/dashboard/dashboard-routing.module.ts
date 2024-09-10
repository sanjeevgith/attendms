import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { 
        path: '',
        component: HomeComponent 
      },
      {
        path: 'profile',
        loadChildren: () => import('../../modules/profile/profile.module').then(m => m.ProfileModule)
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
