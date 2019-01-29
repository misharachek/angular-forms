import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveSampleComponent} from './root';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveSampleComponent
  ],
  exports: [ReactiveSampleComponent]
})
export class ReactiveSampleModule {
}
