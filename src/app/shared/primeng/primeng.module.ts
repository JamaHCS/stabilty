import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    SplitButtonModule,
    TieredMenuModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    TableModule,
  ],
  exports: [
    MenuModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    TieredMenuModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
  ],
})
export class PrimengModule {}
