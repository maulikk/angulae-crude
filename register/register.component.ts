import { Component, Inject } from '@angular/core'; 
import { FormGroup } from '@angular/forms';

@Component({  
    templateUrl: './register.component.html'  
}) 

export class registerComponent {
    
    model: any = {
        firstName : 'Maulik',
        lastName: 'Kadbhane',
        email: 'maulik@gmail.com',
        password: '123456',
        confirmPassword: '123456',
    };

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }

}