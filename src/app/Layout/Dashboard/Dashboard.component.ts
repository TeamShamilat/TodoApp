import { Component, OnInit } from '@angular/core';
import { DASHBOARD_COMPONENTS } from '../Component/Dashboard.Constant';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../mat.module';

@Component({
  selector: 'app-Dashboard',
  standalone: true,
  imports: [...DASHBOARD_COMPONENTS, RouterOutlet, MaterialModule],
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
