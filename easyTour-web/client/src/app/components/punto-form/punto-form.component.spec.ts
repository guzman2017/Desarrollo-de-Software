import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoFormComponent } from './punto-form.component';

describe('PuntoFormComponent', () => {
  let component: PuntoFormComponent;
  let fixture: ComponentFixture<PuntoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
