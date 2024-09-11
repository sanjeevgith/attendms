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
    this.scrollable.nativeElement.addEventListener('scroll', () => this.updateButtonVisibility());
  }

  scrollLeft() {
    this.scrollable.nativeElement.scrollBy({
      left: -this.scrollable.nativeElement.clientWidth,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollable.nativeElement.scrollBy({
      left: this.scrollable.nativeElement.clientWidth,
      behavior: 'smooth'
    });
  }

  updateButtonVisibility() {
    const scrollableElement = this.scrollable.nativeElement;
    const maxScrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth;
  
    this.isAtStart = scrollableElement.scrollLeft === 0;
  
    // Allow for a small margin of error (e.g., 1px) when checking if at the end
    this.isAtEnd = scrollableElement.scrollLeft >= maxScrollLeft - 1;
  
    this.cdr.detectChanges(); 
  }
  
}
