import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbooksintegrationInformationComponent } from './quickbooksintegration-information.component';

describe('QuickbooksintegrationInformationComponent', () => {
  let component: QuickbooksintegrationInformationComponent;
  let fixture: ComponentFixture<QuickbooksintegrationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbooksintegrationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbooksintegrationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
