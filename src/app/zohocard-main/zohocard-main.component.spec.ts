import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohocardMainComponent } from './zohocard-main.component';

describe('ZohocardMainComponent', () => {
  let component: ZohocardMainComponent;
  let fixture: ComponentFixture<ZohocardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohocardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohocardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
