
import {
  Validation,
} from '../utils/attributes-validation';

export default class UserDto extends Validation {
  name: string;
  lastname: string;
  bornDate: Date;
  isProfessional: boolean;
  profileId: number
  rolId: number;
  email: string;
  password: string;
  documentTypeId!: number;
  documentValue!: number;
  cuil!: number;
  phone!: number;
  cellPhone!: number;
  street!: string;
  streetNumber!: number;
  floor?: number;
  apartment?: string;
  postalCode!: number;
  town!: string;
  department!: string;
  state!: string;
  country!: string;

  constructor() {
    super(['apartment', 'floor']);
    this.name = '';
    this.lastname = '';
    this.bornDate = new Date();
    this.isProfessional = false;
    this.profileId = 0;
    this.rolId = 0;
    this.email = '';
    this.password = '';
    this.documentTypeId = 0;
    this.documentValue = 0;
    this.cuil = 0;
    this.phone = 0;
    this.cellPhone = 0;
    this.street = '';
    this.streetNumber = 0;
    this.floor = 0;
    this.apartment = '';
    this.postalCode = 0;
    this.town = '';
    this.department = '';
    this.state = '';
    this.country = '';
  }

  //Overrides the original method
  static getClassName(): string {
    return 'user-request';
  }
}
