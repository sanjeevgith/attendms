import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Def
})
export class LoginComponent implements OnInit{


  constructor(private router:Router) { }


  ngOnInit(): void {

  }


  login(){
    this.router.navigate(['/dashboard']);

  }

  punchIn(){

  }

  punchOut(){

  }


  password = '';
  eyeIcon: string = 'fas fa-eye'; 

  togglePassword() {
    const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement;
    if (passwordInput) {
      // Toggle the password field type between 'password' and 'text'
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
      
      // Toggle the eye icon
      this.eyeIcon = this.eyeIcon === 'fas fa-eye' ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
  }




}
