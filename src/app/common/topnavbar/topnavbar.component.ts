import { Component, HostListener, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AboutModalComponent } from '../../components/about-modal/about-modal.component';

@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.scss',
})
export class TopnavbarComponent implements OnInit {
  isScrolled: boolean = false;
  readonly dialog = inject(MatDialog);

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY;
    this.isScrolled = scrollTop > 50; // Adjust value as needed
  }

  constructor() {}

  ngOnInit(): void {}


  openaboutModal(){
    let dialogRef = this.dialog.open(AboutModalComponent, {
      width: '170px',
      position: {
        right: '10px', 
        top: '50px' ,
      },
    });
  }

}
