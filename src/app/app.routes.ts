import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shares/componets/layout/layout.component')
      .then(m => m.LayoutComponent), // Especifica el componente
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./inicio/dashboard/dashboard.component')
          .then(m => m.DashboardComponent) // Especifica el componente
      },
      {
        path: 'profile',
        loadComponent: () => import('./inicio/profile/profile.component')
          .then(m => m.ProfileComponent) // Especifica el componente
      },
      {
        path: 'tables',
        loadComponent: () => import('./inicio/table/table.component')
          .then(m => m.TableComponent) // Especifica el componente
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
