import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohointegrationInformationComponent } from './zohointegration-information.component';

describe('ZohointegrationInformationComponent', () => {
  let component: ZohointegrationInformationComponent;
  let fixture: ComponentFixture<ZohointegrationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohointegrationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohointegrationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
