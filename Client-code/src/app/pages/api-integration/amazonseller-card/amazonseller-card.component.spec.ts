import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonsellerCardComponent } from './amazonseller-card.component';

describe('AmazonsellerCardComponent', () => {
  let component: AmazonsellerCardComponent;
  let fixture: ComponentFixture<AmazonsellerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonsellerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonsellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
