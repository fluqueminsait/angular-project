import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingCardComponent } from './mixing-card.component';

describe('MixingCardComponent', () => {
  let component: MixingCardComponent;
  let fixture: ComponentFixture<MixingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
