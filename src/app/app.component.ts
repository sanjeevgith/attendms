import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavbarComponent } from './common/topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zinghr';
}
