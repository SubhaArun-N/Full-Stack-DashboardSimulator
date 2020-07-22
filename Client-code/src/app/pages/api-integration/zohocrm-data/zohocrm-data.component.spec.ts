import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZohocrmDataComponent } from './zohocrm-data.component';

describe('ZohocrmDataComponent', () => {
  let component: ZohocrmDataComponent;
  let fixture: ComponentFixture<ZohocrmDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZohocrmDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZohocrmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
