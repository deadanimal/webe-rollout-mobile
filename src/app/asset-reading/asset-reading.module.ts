import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetReadingPageRoutingModule } from './asset-reading-routing.module';

import { AssetReadingPage } from './asset-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetReadingPageRoutingModule
  ],
  declarations: [AssetReadingPage]
})
export class AssetReadingPageModule {}
