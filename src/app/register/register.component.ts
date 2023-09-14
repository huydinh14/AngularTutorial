import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  hide = true;
  responseMsg: string = '';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastNameL: fb.control('', [Validators.required]),
      email: fb.control('',[Validators.required, Validators.email]),
      password: fb.control('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
      rpassword: fb.control(''),
      userType: fb.control('user')
     },
     {
      Validators: [repeatPasswordValidator],
      
     } as AbstractControlOptions
     )
  }

  register(){
    
  }
}

export const repeatPasswordValidator: ValidatorFn = (
  control: AbstractControl
) : ValidationErrors | null => {
  const pwd = control.get('password')?.value;
  const rpwd = control.get('rpassword')?.value;
  if(pwd === rpwd) {
    control.get('rpassword')?.setErrors(null);
    return null;
  }
  else {
    control.get('rpassword')?.setErrors({rpassword: true});
    return {rpassword: true};
  }
}
