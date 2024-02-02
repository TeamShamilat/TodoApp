import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../mat.module';

@Component({
  selector: 'app-Security',
  standalone: true,
  imports: [ RouterOutlet, MaterialModule],
  templateUrl: './Security.component.html',
  styleUrls: ['./Security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
