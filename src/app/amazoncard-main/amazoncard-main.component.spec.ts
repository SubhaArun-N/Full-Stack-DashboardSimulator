import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazoncardMainComponent } from './amazoncard-main.component';

describe('AmazoncardMainComponent', () => {
  let component: AmazoncardMainComponent;
  let fixture: ComponentFixture<AmazoncardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazoncardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazoncardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
