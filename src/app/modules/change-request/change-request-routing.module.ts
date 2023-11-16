import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeRequestComponent } from './change-request.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ChangeRequestComponent,
    children: [
      {
        path: 'create',
        pathMatch: 'full',
        component: CreateComponent,
      },
      {
        path: 'edit',
        pathMatch: 'full',
        component: EditComponent,
      },
      {
        path: 'search',
        pathMatch: 'full',
        component: SearchComponent,
      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRequestRoutingModule { }
