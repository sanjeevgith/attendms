import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './components/about/about.component';
import { SalaryComponent } from './components/salary/salary.component';
import { BankComponent } from './components/bank/bank.component';

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
