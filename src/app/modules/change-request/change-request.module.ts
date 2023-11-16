import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRequestRoutingModule } from './change-request-routing.module';
import { ChangeRequestComponent } from './change-request.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    ChangeRequestComponent,
    CreateComponent,
    EditComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ChangeRequestRoutingModule
  ]
})
export class ChangeRequestModule { }
