/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeelingComponent } from './feeling.component';

describe('FeelingComponent', () => {
  let component: FeelingComponent;
  let fixture: ComponentFixture<FeelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
