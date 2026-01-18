import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavbarComponent } from '../../common/components/topnavbar/topnavbar.component';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { SidenavbarComponent } from '../../common/components/sidenavbar/sidenavbar.component';
import { SidenavbarPhoneComponent } from '../../common/components/sidenavbar-phone/sidenavbar-phone.component';
import { AboutModalComponent } from '../../components/about-modal/about-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,TopnavbarComponent,HomeComponent,FooterComponent,SidenavbarComponent,SidenavbarPhoneComponent,AboutModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
