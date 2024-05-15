import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type User = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  user: User = {
    email: '',
    password: '',
  };

  onSubmit() {
    alert('Login Validé');
  }
}
