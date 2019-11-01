import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypesComponent } from './deviceTypes.component';

describe('DeviceTypeComponent', () => {
  let component: DeviceTypesComponent;
  let fixture: ComponentFixture<DeviceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
