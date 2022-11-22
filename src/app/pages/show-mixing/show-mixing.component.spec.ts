import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMixingComponent } from './show-mixing.component';

describe('ShowMixingComponent', () => {
  let component: ShowMixingComponent;
  let fixture: ComponentFixture<ShowMixingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMixingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMixingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
