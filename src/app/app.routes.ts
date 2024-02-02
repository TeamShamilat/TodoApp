import { Routes } from '@angular/router';
import { SecurityComponent } from './Layout/Security/Security.component';
import { DashboardComponent } from './Layout/Dashboard/Dashboard.component';
import { BlankComponent } from './Layout/Blank/Blank.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'security'
  },
  {
    path: 'security',  component: SecurityComponent,
    loadChildren: () => import('./Layout/Security/security.routes').then(m => m.securityroutes)
  },
  {
    path: 'dashboard',  component: DashboardComponent
  },
  {
    path: '**',  component: BlankComponent
  }
];
