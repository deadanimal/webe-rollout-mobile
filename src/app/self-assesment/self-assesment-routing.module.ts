import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfAssesmentPage } from './self-assesment.page';

const routes: Routes = [
  {
    path: '',
    component: SelfAssesmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfAssesmentPageRoutingModule {}
