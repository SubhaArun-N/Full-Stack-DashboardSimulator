import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbooksDataComponent } from './quickbooks-data.component';

describe('QuickbooksDataComponent', () => {
  let component: QuickbooksDataComponent;
  let fixture: ComponentFixture<QuickbooksDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbooksDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbooksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
