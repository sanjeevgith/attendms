import { Component, ElementRef, model, ViewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selected = model<Date | null>(null);
  @ViewChild('scrollable', { static: false }) scrollable!: ElementRef;

  scrollLeft() {
    this.scrollable.nativeElement.scrollBy({
      left: -200, // Adjust scroll distance as needed
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollable.nativeElement.scrollBy({
      left: 200, // Adjust scroll distance as needed
      behavior: 'smooth'
    });
  }
}
