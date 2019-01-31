import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HighlightModule} from 'ngx-highlightjs';
import {TemplateSampleComponent} from './containers/template-sample/root';
import {ReactiveSampleComponent} from './containers/reactive-sample/root';
import {NestedFormComponent} from './containers/nested-form/root';

import {Routes, RouterModule} from '@angular/router';
import {HeaderModule} from './header';
import {NestedFormModule} from './containers/nested-form';
import {ReactiveSampleModule} from './containers/reactive-sample';
import {TemplateSampleModule} from './containers/template-sample';



const routes: Routes = [
  {path: '', redirectTo: 'template', pathMatch: 'full'},
  {path: 'template', component: TemplateSampleComponent},
  {path: 'reactive', component: ReactiveSampleComponent},
  {path: 'nested', component: NestedFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighlightModule.forRoot({ theme: 'arduino-light'}),
    HeaderModule,
    NestedFormModule,
    ReactiveSampleModule,
    TemplateSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
