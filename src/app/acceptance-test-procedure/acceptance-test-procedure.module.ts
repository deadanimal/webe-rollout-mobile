import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptanceTestProcedurePageRoutingModule } from './acceptance-test-procedure-routing.module';

import { AcceptanceTestProcedurePage } from './acceptance-test-procedure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptanceTestProcedurePageRoutingModule
  ],
  declarations: [AcceptanceTestProcedurePage]
})
export class AcceptanceTestProcedurePageModule {}
