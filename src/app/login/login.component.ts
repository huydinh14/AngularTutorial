import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  responseMsg: string = ''

  /**
   *
   */
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
    })
  }

  login() {
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
  }

  getEmailError() {
    if (this.Email.hasError('required')) return 'Email is required!';
    if (this.Email.hasError('email')) return 'Email is invalid';
    return ''
  }

  getPasswordError() {
    if (this.Password.hasError('required')) return 'Field is required!';
    if (this.Password.hasError('minlength')) return 'Minimum 8 chracters are required';
    if (this.Password.hasError('maxlength')) return 'Maximum 15 chracters are required';
    return ''
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl
  }
}
