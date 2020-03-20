import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachPicturePage } from './attach-picture.page';

const routes: Routes = [
  {
    path: '',
    component: AttachPicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachPicturePageRoutingModule {}
