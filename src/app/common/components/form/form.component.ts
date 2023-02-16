import {Component, Input} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms"
import {ErrorStateMatcher} from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title!: string;

  numberFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

  matcher = new MyErrorStateMatcher();
}
