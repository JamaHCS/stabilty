import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PrimengModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
