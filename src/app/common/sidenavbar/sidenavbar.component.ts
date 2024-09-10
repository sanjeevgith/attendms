import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {

}
