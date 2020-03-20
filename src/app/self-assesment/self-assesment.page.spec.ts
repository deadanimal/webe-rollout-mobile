import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelfAssesmentPage } from './self-assesment.page';

describe('SelfAssesmentPage', () => {
  let component: SelfAssesmentPage;
  let fixture: ComponentFixture<SelfAssesmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAssesmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelfAssesmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
