import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../../mat.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../Core/Services/auth.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../../../../Core/model/response.type';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;

      this.authService.login(username, password).subscribe((res:ApiResponse) => {
        if (res.isSuccess)
        {
          // redirect
          this.router.navigate(['dashboard']);
          this.error = '';
        }
        else
        {
          this.error = res.message;
          }
      }
      );
      //this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

 
}
