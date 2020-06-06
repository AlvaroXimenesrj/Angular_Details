import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from './limit.formvalidator';


export class BasedFormComponent extends FormControl {
    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be at least
        ${this.errors['minlength'].requiredLength}
        characters`);
                        break;
                    case "maxlength":
                        messages.push(`A ${this.label} must be no more than
        ${this.errors['maxlength'].requiredLength}
        characters`);
                        break;
                    case "limit":
                        messages.push(`A ${this.label} cannot be more
        than ${this.errors['limit'].limit}`);
                        break;
                    case "pattern":
                        messages.push(`The ${this.label} contains
        illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}


export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            name: new BasedFormComponent("Name", "name", "", Validators.required),
            category: new BasedFormComponent("Category", "category", "",
                Validators.compose([Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(3),
                Validators.maxLength(10)])),
            price: new BasedFormComponent("Price", "price", "",
                Validators.compose([Validators.required,
                LimitValidator.Limit(100),
                Validators.pattern("^[0-9\.]+$")]))
        });
    }
    get productControls(): BasedFormComponent[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as BasedFormComponent);
    }
    getFormValidationMessages(form: any): string[] {
        let messages: string[] = [];
        this.productControls.forEach(c => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}