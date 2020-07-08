import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbooksCardComponent } from './quickbooks-card.component';

describe('QuickbooksCardComponent', () => {
  let component: QuickbooksCardComponent;
  let fixture: ComponentFixture<QuickbooksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbooksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
