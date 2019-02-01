import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {Profile} from './profile';

export class ProfileErrorstateMatcher implements ErrorStateMatcher {

  model: Profile;
  fieldName: string;
  errorNames: Array<string>;

  constructor(model: Profile, fieldName: string, errorNames: Array<string>) {
    this.model = model;
    this.fieldName = fieldName;
    this.errorNames = errorNames;
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const hasError = this.containsOneOf();
    return hasError || (control.invalid && control.touched);
  }

  containsOneOf(): boolean {
    return this.errorNames.indexOf(this.model.error[this.fieldName]) > -1;
  }
}
