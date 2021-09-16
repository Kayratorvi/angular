import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCardsComponent } from './solo-cards.component';

describe('SoloCardsComponent', () => {
  let component: SoloCardsComponent;
  let fixture: ComponentFixture<SoloCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
