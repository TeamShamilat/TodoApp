import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../mat.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../Core/Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      const email = this.form.get('email')?.value;
      this.authService.register(email, password,username).subscribe((res) => {
        if (res)
        {
          console.log(res);
        }
        else
        {
          this.error = 'Wrong Login';
          }
      }
      );
    }
   
     
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
