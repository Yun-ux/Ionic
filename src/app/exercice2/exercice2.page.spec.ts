import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Exercice2Page } from './exercice2.page';

describe('Exercice2Page', () => {
  let component: Exercice2Page;
  let fixture: ComponentFixture<Exercice2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercice2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercice2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
