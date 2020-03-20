import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptanceTestProcedurePage } from './acceptance-test-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptanceTestProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptanceTestProcedurePageRoutingModule {}
