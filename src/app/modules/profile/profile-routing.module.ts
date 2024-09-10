import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { SalaryComponent } from './salary/salary.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { 
        path: '', 
        component: AboutComponent 
      },
      {
        path: 'salary',
        component: SalaryComponent
      },
      {
        path: 'bank',
        component: BankComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
