import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceTypesFormComponent } from './deviceTypes-form.component';

describe('DeviceTypesFormComponent', () => {
  let component: DeviceTypesFormComponent;
  let fixture: ComponentFixture<DeviceTypesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceTypesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
