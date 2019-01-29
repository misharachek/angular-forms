import {Component, OnInit, Inject} from '@angular/core';
import {locale} from 'app/commons/locale';

@Component({
  selector: 'app-template-sample',
  templateUrl: './template-sample.component.html',
  styleUrls: ['./template-sample.component.css'],
  providers: [
    {provide: locale, useValue: locale}
  ]
})
export class TemplateSampleComponent implements OnInit {


  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];

  constructor(@Inject(locale) public locales) {
  }

  ngOnInit() {
  }

  public addUser(myForm) {
    console.log('Form', myForm);
  }

}
