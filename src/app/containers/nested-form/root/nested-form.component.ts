import {Component, Inject, OnInit, AfterViewChecked, ChangeDetectorRef,} from '@angular/core';
import {locale} from 'app/commons/locale';
import {Profile} from './profile';
import {ProfileErrorstateMatcher} from './profile-errorstate-matcher';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
  providers: [
    {provide: locale, useValue: locale}
  ]
})
export class NestedFormComponent implements OnInit, AfterViewChecked {

  public states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  public model = new Profile();
  public firstNameMatcher: ProfileErrorstateMatcher;
  public lastNameMatcher: ProfileErrorstateMatcher;
  public streetAddressMatcher: ProfileErrorstateMatcher;
  public cityAddressMatcher: ProfileErrorstateMatcher;
  public zipCodeAddressMatcher: ProfileErrorstateMatcher;

  constructor(@Inject(locale) public locales,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.firstNameMatcher = new ProfileErrorstateMatcher(
      this.model, 'firstName', [
        'short',
        'notValid'
      ]
    );

    this.lastNameMatcher = new ProfileErrorstateMatcher(
      this.model, 'lastName', [
        'short',
        'notValid',
      ]
    );

    this.streetAddressMatcher = new ProfileErrorstateMatcher(
      this.model, 'streetAddress', [
        'short',
        'notValid'
      ]
    );

    this.cityAddressMatcher = new ProfileErrorstateMatcher(
      this.model, 'cityAddress', [
        'short',
        'notValid'
      ]
    );

    this.zipCodeAddressMatcher = new ProfileErrorstateMatcher(
      this.model, 'zipCode', [
        'short',
        'notValid'
      ]
    );
  }

  submit() {
    if (this.model.isProfileNotEmpty()) {
      console.log('Profile', this.model);
    }
  }
}
