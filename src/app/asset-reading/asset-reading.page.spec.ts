import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetReadingPage } from './asset-reading.page';

describe('AssetReadingPage', () => {
  let component: AssetReadingPage;
  let fixture: ComponentFixture<AssetReadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetReadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
