import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohoCardComponent } from './zoho-card.component';

describe('ZohoCardComponent', () => {
  let component: ZohoCardComponent;
  let fixture: ComponentFixture<ZohoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
