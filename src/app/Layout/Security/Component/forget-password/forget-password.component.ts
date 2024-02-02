import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../mat.module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [MaterialModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
