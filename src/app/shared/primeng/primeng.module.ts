import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';


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
  ],
  exports: [
    MenuModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    TieredMenuModule,
    DropdownModule,
    CheckboxModule,
  ],
})
export class PrimengModule {}
