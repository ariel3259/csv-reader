export class AttributesValidation {
  name: string;
  type: string;
  required: boolean;
}

export abstract class Validation{
  private nonRequired: string[];

  constructor(nonRequired: string[]) {
    this.nonRequired = nonRequired;
  }

  getAttributesValidation(): AttributesValidation[] {
    const keys: string[] = Object.keys(this).filter((key: string) => key !== 'nonRequired');
    return keys.map((key: string) => {
        let type: string = '';
        if (/email/.test(key) || /Email/.test(key)) type = 'email'
        else {
            if (typeof this[key] === 'object') type = 'date'
            else type = typeof this[key];
        }
        return {
            name: key,
            type, 
            required: !this.nonRequired.includes(key), 
        }
    });
  }
}