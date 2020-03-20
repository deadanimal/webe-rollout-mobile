import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptanceTestProcedurePage } from './acceptance-test-procedure.page';

describe('AcceptanceTestProcedurePage', () => {
  let component: AcceptanceTestProcedurePage;
  let fixture: ComponentFixture<AcceptanceTestProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceTestProcedurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptanceTestProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
