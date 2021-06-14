import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdrComponent } from './placeholdr.component';

describe('PlaceholdrComponent', () => {
  let component: PlaceholdrComponent;
  let fixture: ComponentFixture<PlaceholdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
