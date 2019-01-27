import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TemplateSampleComponent} from './root';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateSampleComponent
  ],
  exports: [TemplateSampleComponent]
})
export class TemplateSampleModule { }
