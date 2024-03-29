import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { MustMatch } from './must-match.validator';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
    @Input('mustMatch') mustMatch: string[] = [];    

    validate(formGroup: FormGroup): ValidationErrors {
        //console.log('mustMatch ...', this.mustMatch);
        //return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);   
        //console.log(MustMatch(this.mustMatch[0], this.mustMatch[1], formGroup));
        return MustMatch(this.mustMatch[0], this.mustMatch[1], formGroup);      
    }
}