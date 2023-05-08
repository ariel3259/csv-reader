import { Validation } from "./attributes-validation"

export class ValidationFactory<T extends Validation> {
  private make: () => T;

  constructor(make: () => T) {
    this.make = make;
  }

  getInstance(): T {
    return this.make();
  }
}
