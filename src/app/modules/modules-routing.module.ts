import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'issues',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('./issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'findings',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('./findings/findings.module').then((m) => m.FindingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
