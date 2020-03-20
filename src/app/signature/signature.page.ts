import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {

  @ViewChild(SignaturePad, {static: false}) signaturePad: SignaturePad;
 
  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300,
    'backgroundColour': 'rgba(232,232,232,1)'
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
