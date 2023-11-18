import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepersonajeComponent } from './detallepersonaje.component';

describe('DetallepersonajeComponent', () => {
  let component: DetallepersonajeComponent;
  let fixture: ComponentFixture<DetallepersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallepersonajeComponent]
    });
    fixture = TestBed.createComponent(DetallepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
