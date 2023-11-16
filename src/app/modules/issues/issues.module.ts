import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IssuesComponent,
    CreateComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    SharedModule
  ]
})
export class IssuesModule { }
