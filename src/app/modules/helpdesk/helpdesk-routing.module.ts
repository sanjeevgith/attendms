import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpdeskComponent } from './helpdesk.component';

const routes: Routes = [
  {
    path:'',
    component:HelpdeskComponent,
    children:[ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
