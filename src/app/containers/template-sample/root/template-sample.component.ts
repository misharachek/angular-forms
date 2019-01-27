import {Component, OnInit, Inject} from '@angular/core';
import {templateForm} from './locale'

@Component({
  selector: 'app-template-sample',
  templateUrl: './template-sample.component.html',
  styleUrls: ['./template-sample.component.css'],
  providers: [
    {provide: templateForm, useValue: templateForm}
  ]
})
export class TemplateSampleComponent implements OnInit {


  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  constructor(@Inject(templateForm) public locales) { }

  ngOnInit() {
  }

  public addUser(myForm) {
    console.log('Form', myForm);
  }

}
