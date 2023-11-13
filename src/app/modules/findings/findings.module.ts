import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindingsRoutingModule } from './findings-routing.module';
import { FindingsComponent } from './findings.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    FindingsComponent,
    CreateComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FindingsRoutingModule
  ]
})
export class FindingsModule { }
