import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LAYOUT_COMPONENTS } from './Layout/Layout.Constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...LAYOUT_COMPONENTS, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'App-Todo';
}
