import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavbarComponent } from '../../common/topnavbar/topnavbar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SidenavbarComponent } from '../../common/sidenavbar/sidenavbar.component';
import { SidenavbarPhoneComponent } from '../../common/sidenavbar-phone/sidenavbar-phone.component';
import { AboutModalComponent } from '../about-modal/about-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,TopnavbarComponent,HomeComponent,FooterComponent,SidenavbarComponent,SidenavbarPhoneComponent,AboutModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
