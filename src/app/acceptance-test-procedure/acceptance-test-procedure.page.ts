import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignaturePage } from '../signature/signature.page';

@Component({
  selector: 'app-acceptance-test-procedure',
  templateUrl: './acceptance-test-procedure.page.html',
  styleUrls: ['./acceptance-test-procedure.page.scss'],
})
export class AcceptanceTestProcedurePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SignaturePage
    });
    return await modal.present();
  }

}
