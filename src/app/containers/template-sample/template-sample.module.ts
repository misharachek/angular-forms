import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateSampleComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TemplateSampleComponent
  ],
  exports: [TemplateSampleComponent]
})
export class TemplateSampleModule { }
