import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatingMenuComponent } from './components/floating-menu/floating-menu.component';
import { DialogCreateIssueComponent } from './components/dialog-create-issue/dialog-create-issue.component';

@NgModule({
  declarations: [FloatingMenuComponent, DialogCreateIssueComponent],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FloatingMenuComponent,
  ],
})
export class SharedModule {}
