import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveSampleComponent} from './root';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReactiveSampleComponent
  ],
  exports: [ReactiveSampleComponent]
})
export class ReactiveSampleModule { }
