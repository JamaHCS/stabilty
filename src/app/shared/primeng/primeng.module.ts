import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    SplitButtonModule,
    TieredMenuModule,
  ],
  exports: [MenuModule, ButtonModule, SplitButtonModule, TieredMenuModule],
})
export class PrimengModule {}
