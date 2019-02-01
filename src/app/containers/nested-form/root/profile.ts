import {ValidationUtils} from './validation-utils';

export class Profile {
  private _profileFirstName: string;
  private _profileLastName: string;
  primaryAddress?: boolean;
  private _profileStreetAddress: string;
  private _profileCityAddress: string;
  private _profileStateAddress: string;
  private _profileZipCodeAddress: string;
  error = new Array<string>();

  set profileFirstName(value: string) {
    this._profileFirstName = value;
    this.validate();
  }

  set profileLastName(value: string) {
    this._profileLastName = value;
    this.validate();
  }

  set profileStreetAddress(value: string) {
    this._profileStreetAddress = value;
    this.validate();
  }

  set profileCityAddress(value: string) {
    this._profileCityAddress = value;
    this.validate();
  }

  set profileZipCodeAddress(value: string) {
    this._profileZipCodeAddress = value;
    this.validate();
  }

  get profileStateAddress(): string {
    return this._profileStateAddress;
  }

  set profileStateAddress(value: string) {
    this._profileStateAddress = value;
  }

  get profileFirstName(): string {
    return this._profileFirstName;
  }

  get profileLastName(): string {
    return this._profileLastName;
  }

  get profileStreetAddress(): string {
    return this._profileStreetAddress;
  }

  get profileCityAddress(): string {
    return this._profileCityAddress;
  }

  get profileZipCodeAddress(): string {
    return this._profileZipCodeAddress;
  }

  clearError() {
    this.error = new Array<string>();
  }

  validate(): Array<string> {
    this.clearError();
    if (this.profileFirstName) {
      if (this.profileFirstName.length < 2 && this.profileFirstName.length > 0) {
        this.error['firstName'] = 'short';
      }
      if (!ValidationUtils.isValid(this.profileFirstName)) {
        this.error['firstName'] = 'notValid';
      }
    }
    if (this.profileLastName) {
      if (this.profileLastName.length < 2 && this.profileLastName.length > 0) {
        this.error['lastName'] = 'short';
      }
      if (!ValidationUtils.isValid(this.profileLastName)) {
        this.error['lastName'] = 'notValid';
      }
    }
    if (this.profileStreetAddress) {
      if (this.profileStreetAddress.length < 5 && this.profileStreetAddress.length > 0) {
        this.error['streetAddress'] = 'short';
      }
      if (!ValidationUtils.isValid(this.profileStreetAddress)) {
        this.error['streetAddress'] = 'notValid';
      }
    }
    if (this.profileCityAddress) {
      if (this.profileCityAddress.length < 5 && this.profileCityAddress.length > 0) {
        this.error['cityAddress'] = 'short';
      }
      if (!ValidationUtils.isValid(this.profileCityAddress)) {
        this.error['cityAddress'] = 'notValid';
      }
    }
    if (this.profileZipCodeAddress) {
      if (this.profileZipCodeAddress.length < 5 && this.profileZipCodeAddress.length > 0) {
        this.error['zipCode'] = 'short';
      }
      if (!ValidationUtils.isValid(this.profileZipCodeAddress)) {
        this.error['zipCode'] = 'notValid';
      }
    }
    return this.error;
  }

  isProfileNotEmpty(): boolean {
    return this.isValid() &&
      ValidationUtils.isNotEmpty(this.profileFirstName) &&
      ValidationUtils.isNotEmpty(this.profileLastName) &&
      ValidationUtils.isNotEmpty(this.profileStreetAddress) &&
      ValidationUtils.isNotEmpty(this.profileCityAddress) &&
      ValidationUtils.isNotEmpty(this.profileZipCodeAddress) &&
      ValidationUtils.isNotEmpty(this.profileStateAddress);
  }

  isValid(): boolean {
    return Object.keys(this.validate()).length === 0;
  }
}
