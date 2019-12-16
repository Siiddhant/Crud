/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SdfdsfsdfsdComponent } from './sdfdsfsdfsd.component';

describe('SdfdsfsdfsdComponent', () => {
  let component: SdfdsfsdfsdComponent;
  let fixture: ComponentFixture<SdfdsfsdfsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdfdsfsdfsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdfdsfsdfsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
