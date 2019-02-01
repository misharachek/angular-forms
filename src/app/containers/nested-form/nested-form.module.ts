import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NestedFormComponent} from './root';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  declarations: [
    NestedFormComponent
  ],
  exports: [
    NestedFormComponent
  ]
})
export class NestedFormModule { }
