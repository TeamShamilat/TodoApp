import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../mat.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
