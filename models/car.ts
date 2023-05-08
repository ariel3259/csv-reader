import {  Validation } from "../utils/attributes-validation";

export class Car extends Validation {
    model!: string;
    type!: string;
    series!: number;
    description?: string;
    price: number;

    constructor(){
        super(['description'])
        this.model = ''
        this.type = '';
        this.series = 0
        this.description = '';
        this.price = 0;
    }

    static getClassName(): string {
        return 'car';
    }
}