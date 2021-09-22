import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescriptionsComponent } from './text-descriptions.component';

describe('TextDescriptionsComponent', () => {
  let component: TextDescriptionsComponent;
  let fixture: ComponentFixture<TextDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
