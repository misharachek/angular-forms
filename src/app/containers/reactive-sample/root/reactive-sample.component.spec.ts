import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ReactiveSampleComponent} from './reactive-sample.component';

const registrationControls = {
  firstName: 'firstName',
  lastName: 'lastName',
  date: 'date',
  streetAddress: 'streetAddress',
  cityAddress: 'cityAddress',
  zipCodeAddress: 'zipCodeAddress'
};


describe('ReactiveSampleComponent', () => {
  let component: ReactiveSampleComponent;
  let fixture: ComponentFixture<ReactiveSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveSampleComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`Testing registration form`, () => {

    describe(`${registrationControls.firstName} validation First Name`, () => {
      it('required', () => {

        component.registrationForm.controls[registrationControls.firstName].setValue('');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.firstName].setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('required')).not.toBeTruthy();
      });
      it('only alphabetic and special symbols', () => {

        component.registrationForm.controls[registrationControls.firstName].setValue('123123');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('pattern')).toBeTruthy();

        component.registrationForm.controls[registrationControls.firstName].setValue('Misha-@!@!$!$#@@');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('pattern')).not.toBeTruthy();
      });

      it('min length', () => {

        component.registrationForm.controls[registrationControls.firstName].setValue('M');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('minlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.firstName].setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.firstName].getError('minlength')).not.toBeTruthy();
      });

      it('max length', () => {

        component.registrationForm.controls[registrationControls.firstName]
          .setValue('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        expect(component.registrationForm.controls[registrationControls.firstName]
          .getError('maxlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.firstName]
          .setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.firstName]
          .getError('maxlength')).not.toBeTruthy();
      });
    });

    describe(`${registrationControls.lastName} Last Name`, () => {
      it('required', () => {

        component.registrationForm.controls[registrationControls.lastName].setValue('');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.lastName].setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('required')).not.toBeTruthy();
      });

      it('only alphabetic and special symbols', () => {

        component.registrationForm.controls[registrationControls.lastName].setValue('123123');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('pattern')).toBeTruthy();

        component.registrationForm.controls[registrationControls.lastName].setValue('Misha-@!@!$!$#@@');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('pattern')).not.toBeTruthy();
      });

      it('min length', () => {

        component.registrationForm.controls[registrationControls.lastName].setValue('A');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('minlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.lastName].setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.lastName].getError('minlength')).not.toBeTruthy();
      });

      it('max length', () => {

        component.registrationForm.controls[registrationControls.lastName]
          .setValue('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        expect(component.registrationForm.controls[registrationControls.lastName]
          .getError('maxlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.lastName]
          .setValue('Misha');
        expect(component.registrationForm.controls[registrationControls.lastName]
          .getError('maxlength')).not.toBeTruthy();
      });
    });

    describe(`${registrationControls.date} Date`, () => {
      it('required', () => {

        component.registrationForm.controls[registrationControls.date].setValue('');
        expect(component.registrationForm.controls[registrationControls.date].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.date].setValue('10/11/2010');
        expect(component.registrationForm.controls[registrationControls.date].getError('required')).not.toBeTruthy();
      });
    });

    describe(`${registrationControls.streetAddress} Street Address`, () => {
      it('required', () => {

        component.registrationForm.controls[registrationControls.streetAddress].setValue('');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.streetAddress].setValue('dsadsasdsdsdsds');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('required')).not.toBeTruthy();
      });

      it('only alphabetic and special symbols', () => {

        component.registrationForm.controls[registrationControls.streetAddress].setValue('122544552522');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('pattern')).toBeTruthy();

        component.registrationForm.controls[registrationControls.streetAddress].setValue('Lenina@@@+@');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('pattern')).not.toBeTruthy();
      });

      it('min length', () => {

        component.registrationForm.controls[registrationControls.streetAddress].setValue('k');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('minlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.streetAddress].setValue('Lenina');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('minlength')).not.toBeTruthy();
      });

      it('max length', () => {

        component.registrationForm.controls[registrationControls.streetAddress]
          .setValue('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        expect(component.registrationForm.controls[registrationControls.streetAddress]
          .getError('maxlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.streetAddress].setValue('Lenina');
        expect(component.registrationForm.controls[registrationControls.streetAddress].getError('maxlength')).not.toBeTruthy();
      });
    });

    describe(`${registrationControls.cityAddress} City Address`, () => {

      it('required', () => {

        component.registrationForm.controls[registrationControls.cityAddress].setValue('');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.cityAddress].setValue('Kharkov');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('required')).not.toBeTruthy();
      });

      it('only alphabetic and special symbols', () => {

        component.registrationForm.controls[registrationControls.cityAddress].setValue('123123');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('pattern')).toBeTruthy();

        component.registrationForm.controls[registrationControls.cityAddress].setValue('Kharkov-@!@!$!$#@@');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('pattern')).not.toBeTruthy();
      });

      it('min length', () => {

        component.registrationForm.controls[registrationControls.cityAddress].setValue('U');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('minlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.cityAddress].setValue('Kharkov');
        expect(component.registrationForm.controls[registrationControls.cityAddress].getError('minlength')).not.toBeTruthy();
      });

      it('max length', () => {

        component.registrationForm.controls[registrationControls.cityAddress]
          .setValue('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
        expect(component.registrationForm.controls[registrationControls.cityAddress]
          .getError('maxlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.cityAddress]
          .setValue('Kharkov');
        expect(component.registrationForm.controls[registrationControls.cityAddress]
          .getError('maxlength')).not.toBeTruthy();
      });
    });


    describe(`${registrationControls.zipCodeAddress} Zip Code`, () => {

      it('require', () => {

        component.registrationForm.controls[registrationControls.zipCodeAddress].setValue('');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress].getError('required')).toBeTruthy();

        component.registrationForm.controls[registrationControls.zipCodeAddress].setValue('565a4s4d');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress].getError('required')).not.toBeTruthy();
      });

      it('only alphabetic and special symbols', () => {

        component.registrationForm.controls[registrationControls.zipCodeAddress].setValue('123123');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress].getError('pattern')).toBeTruthy();

        component.registrationForm.controls[registrationControls.zipCodeAddress].setValue('ALEX-@!@!$!$#@@');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress].getError('pattern')).not.toBeTruthy();
      });

      it('min length', () => {

        component.registrationForm.controls[registrationControls.zipCodeAddress]
          .setValue('U');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress]
          .getError('minlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.zipCodeAddress]
          .setValue('Uganda');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress]
          .getError('minlength')).not.toBeTruthy();
      });

      it('max length', () => {

        component.registrationForm.controls[registrationControls.zipCodeAddress]
          .setValue('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress]
          .getError('maxlength')).toBeTruthy();

        component.registrationForm.controls[registrationControls.zipCodeAddress]
          .setValue('Uganda');
        expect(component.registrationForm.controls[registrationControls.zipCodeAddress]
          .getError('maxlength')).not.toBeTruthy();
      });
    });
  });
});
