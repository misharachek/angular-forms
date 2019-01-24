import {Component, OnInit, Inject} from '@angular/core';
import {headerLocale} from './locale';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    {provide: headerLocale, useValue: headerLocale}
  ]
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(headerLocale) public locales) { }

  ngOnInit() {
  }

}
