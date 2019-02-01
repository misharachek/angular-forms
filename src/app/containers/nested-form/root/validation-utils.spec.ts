import {ValidationUtils} from './validation-utils';

describe('Validation', () => {
  describe('public static method isEmpty', () => {
    it('to be defined', () => {
      expect(ValidationUtils.isEmpty).toBeDefined();
    });

    it('should return false if incoming parameter is not null', () => {
      expect(ValidationUtils.isEmpty('some')).toBeFalsy();
    });

    it('should return true if incoming parameter is empty', () => {
      expect(ValidationUtils.isEmpty('')).toBeTruthy();
    });

    it('should return true if incoming parameter is null', () => {
      expect(ValidationUtils.isEmpty(null)).toBeTruthy();
    });
  });

  describe('public static method isNotEmpty', () => {
    it('to be defined', () => {
      expect(ValidationUtils.isNotEmpty).toBeDefined();
    });

    it('should return true if method isEmpty return false', () => {
      expect(ValidationUtils.isNotEmpty('some')).toBeTruthy();
    });

    it('should return false if method isEmpty return true', () => {
      expect(ValidationUtils.isNotEmpty('')).toBeFalsy();
    });
  });

  describe('public static method isValid', () => {
    it('to be defined', () => {
      expect(ValidationUtils.isValid).toBeDefined();
    });
  });
});
