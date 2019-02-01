export class ValidationUtils {

  public static isEmpty(value: string): boolean {
    let result = value === null;
    if (!result) {
      result = (value == null || value.length === 0);
    }
    return result;
  }

  public static isNotEmpty(value: string): boolean {
    return !this.isEmpty(value);
  }

  public static isValid(name: string): boolean {
    const pattern = /^[a-zA-Z!@#$&()\-`.+,/"]*$/;
    return this.isNotEmpty(name) && !!name.match(pattern);
  }
}
