import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title!: string;
  @Input() detail: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }


}

// myForm: FormGroup;
//
// constructor(private formBuilder: FormBuilder) { }
//
// ngOnInit() {
//   const formControls = {};
//   this.formFields.forEach(field => {
//     formControls[field.name] = [field.value, field.validation];
//   });
//   this.myForm = this.formBuilder.group(formControls);
// }


// formFields = [
//   { type: 'text', label: 'Nome', name: 'nome', value: '', validation: [Validators.required, Validators.minLength(3)] },
//   { type: 'email', label: 'Email', name: 'email', value: '', validation: [Validators.required, Validators.email] },
//   { type: 'password', label: 'Password', name: 'password', value: '', validation: [Validators.required, Validators.minLength(8)] },
//   // Aggiungi altri campi qui...
// ];
