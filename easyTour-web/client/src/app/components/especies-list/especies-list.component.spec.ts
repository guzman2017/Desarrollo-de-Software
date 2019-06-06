import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesListComponent } from './especies-list.component';

describe('EspeciesListComponent', () => {
  let component: EspeciesListComponent;
  let fixture: ComponentFixture<EspeciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
