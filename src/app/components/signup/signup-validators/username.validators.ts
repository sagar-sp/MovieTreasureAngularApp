import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators{
    static cannotContainSpace(control : AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0 ){
            return {cannotContainSpace : "cannot contains Space"}
        }
        
        return null;
    }
}