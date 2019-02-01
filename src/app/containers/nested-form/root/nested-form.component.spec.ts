import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NestedFormComponent} from './nested-form.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';


describe('NestedFormComponent', () => {
  let component: NestedFormComponent;
  let fixture: ComponentFixture<NestedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NestedFormComponent],
      imports: [FormsModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
