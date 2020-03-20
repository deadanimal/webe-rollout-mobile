import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttachPicturePageRoutingModule } from './attach-picture-routing.module';

import { AttachPicturePage } from './attach-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttachPicturePageRoutingModule
  ],
  declarations: [AttachPicturePage]
})
export class AttachPicturePageModule {}
