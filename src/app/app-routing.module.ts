import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
