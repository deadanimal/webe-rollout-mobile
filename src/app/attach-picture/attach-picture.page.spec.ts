import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttachPicturePage } from './attach-picture.page';

describe('AttachPicturePage', () => {
  let component: AttachPicturePage;
  let fixture: ComponentFixture<AttachPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachPicturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttachPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
