import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersFormComponent } from './producers-form.component';

describe('ProducersFormComponent', () => {
  let component: ProducersFormComponent;
  let fixture: ComponentFixture<ProducersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
