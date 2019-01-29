import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {locale} from 'app/commons/locale';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css'],
  providers: [
    {provide: locale, useValue: locale}
  ]
})
export class ReactiveSampleComponent implements OnInit {

  public states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  public registrationForm: FormGroup;
  public alphabeticAndSpecialSymbolsPattern = '^[a-zA-Z!@#$&()\\-`.+,/\"]*$';

  registrationControls = {
    firstName: 'firstName',
    lastName: 'lastName',
    // addressOptions: 'addressOptions',
    date: 'date',
    streetAddress: 'streetAddress',
    cityAddress: 'cityAddress',
    stateAddress: 'stateAddress',
    zipCodeAddress: 'zipCodeAddress'
  };

  constructor(@Inject(locale) public locales) {
  }

  ngOnInit() {
    this.createRegistrationForm();
    this.setValidators();
  }


  public createRegistrationForm() {

    const controls = {
      [this.registrationControls.firstName]: new FormControl(null),
      [this.registrationControls.lastName]: new FormControl(null),
      [this.registrationControls.date]: new FormControl(null),
      [this.registrationControls.streetAddress]: new FormControl(null),
      [this.registrationControls.cityAddress]: new FormControl(null),
      [this.registrationControls.stateAddress]: new FormControl(null),
      [this.registrationControls.zipCodeAddress]: new FormControl(null),
      // [this.registrationControls.isTermsAcceptance]: new FormControl(null),
    };
    this.registrationForm = new FormGroup(controls);
  }

  private setValidators() {

    const validatorsFirstName = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
      Validators.pattern(this.alphabeticAndSpecialSymbolsPattern)
    ];

    const validatorsLastName = [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
      Validators.pattern(this.alphabeticAndSpecialSymbolsPattern)
    ];

    const validatorsDate = [
      Validators.required
    ];

    const validatorsStreetAddress = [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(64),
      Validators.pattern(this.alphabeticAndSpecialSymbolsPattern)
    ];

    const validatorsCityAddress = [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(64),
      Validators.pattern(this.alphabeticAndSpecialSymbolsPattern)
    ];

    const validatorsStateAddress = [
      Validators.required
    ];

    const validatorsZipCodeAddress = [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(64),
      Validators.pattern(this.alphabeticAndSpecialSymbolsPattern)
    ];


    this.registrationForm.controls[this.registrationControls.firstName].setValidators(validatorsFirstName);
    this.registrationForm.controls[this.registrationControls.lastName].setValidators(validatorsLastName);
    this.registrationForm.controls[this.registrationControls.date].setValidators(validatorsDate);
    this.registrationForm.controls[this.registrationControls.streetAddress].setValidators(validatorsStreetAddress);
    this.registrationForm.controls[this.registrationControls.cityAddress].setValidators(validatorsCityAddress);
    this.registrationForm.controls[this.registrationControls.stateAddress].setValidators(validatorsStateAddress);
    this.registrationForm.controls[this.registrationControls.zipCodeAddress].setValidators(validatorsZipCodeAddress);
  }

  public submitForm() {
    console.log('My form', this.registrationForm);
  }

}
