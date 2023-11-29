import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralInfoComponent } from './components/general-info/general-info.component';

@NgModule({
  declarations: [
    IssuesComponent,
    CreateComponent,
    EditComponent,
    SearchComponent,
    GeneralInfoComponent,
  ],
  imports: [CommonModule, IssuesRoutingModule, SharedModule],
  exports: [CreateComponent],
})
export class IssuesModule {}
