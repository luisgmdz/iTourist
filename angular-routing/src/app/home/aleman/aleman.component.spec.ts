import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlemanComponent } from './aleman.component';

describe('AlemanComponent', () => {
  let component: AlemanComponent;
  let fixture: ComponentFixture<AlemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
