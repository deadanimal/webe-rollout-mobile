import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PunchlistPage } from './punchlist.page';

const routes: Routes = [
  {
    path: '',
    component: PunchlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunchlistPageRoutingModule {}
