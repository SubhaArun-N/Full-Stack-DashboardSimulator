import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohocrmCardComponent } from './zohocrm-card.component';

describe('ZohocrmCardComponent', () => {
  let component: ZohocrmCardComponent;
  let fixture: ComponentFixture<ZohocrmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohocrmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohocrmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
