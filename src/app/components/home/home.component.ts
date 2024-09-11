import { AfterViewInit, Component, ElementRef, model, ViewChild ,ChangeDetectorRef } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule,MatCardModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('scrollable', { static: false }) scrollable!: ElementRef;
  isAtStart = true;
  isAtEnd = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateButtonVisibility();
    this.scrollable.nativeElement.addEventListener('scroll', () => {
      this.updateButtonVisibility();
      this.cdr.detectChanges(); 
    });
  }

  scrollLeft() {
    this.scrollable.nativeElement.scrollBy({
      left: -200, 
      behavior: 'smooth'
    });
    this.updateButtonVisibility();
  }

  scrollRight() {
    this.scrollable.nativeElement.scrollBy({
      left: 200, 
      behavior: 'smooth'
    });
    this.updateButtonVisibility();
  }

  updateButtonVisibility() {
    const container = this.scrollable.nativeElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    this.isAtStart = container.scrollLeft === 0;
    this.isAtEnd = container.scrollLeft >= maxScrollLeft;
    this.cdr.detectChanges();
  }
}
