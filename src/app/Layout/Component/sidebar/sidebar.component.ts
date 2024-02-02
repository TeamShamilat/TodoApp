import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../mat.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
