import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NestedFormComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NestedFormComponent
  ],
  exports: [
    NestedFormComponent
  ]
})
export class NestedFormModule { }
