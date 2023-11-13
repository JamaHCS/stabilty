import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'issues',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'findings',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/findings/findings.module').then((m) => m.FindingsModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
