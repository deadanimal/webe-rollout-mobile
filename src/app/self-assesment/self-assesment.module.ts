import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfAssesmentPageRoutingModule } from './self-assesment-routing.module';

import { SelfAssesmentPage } from './self-assesment.page';
import { MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfAssesmentPageRoutingModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
  ],
  declarations: [SelfAssesmentPage]
})
export class SelfAssesmentPageModule {}
