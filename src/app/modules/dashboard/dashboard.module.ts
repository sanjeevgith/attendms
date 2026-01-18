import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../common/components/footer/footer.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HomeComponent
  ]
})
export class DashboardModule { }
