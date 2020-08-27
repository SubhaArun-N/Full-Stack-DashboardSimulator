import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldmappingComponent } from './fieldmapping.component';

describe('FieldmappingComponent', () => {
  let component: FieldmappingComponent;
  let fixture: ComponentFixture<FieldmappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldmappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
