import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormField} from "../../../models/formModels";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() title!: string;
  @Input() formFields!: FormField[];
  @Input() details: any;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    let formControls: any = {};
    this.formFields.forEach(field => {
      formControls[field.name] = [field.value, field.validation];
    });
    this.form = this.formBuilder.group(formControls);

    if (this.details) {
      this.formFields.forEach(field => {
        this.form.get(field.name)?.setValue(this.details[field.name])
      });
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['details'].currentValue) {
      this.formFields.forEach(field => {
        if (this.form)
          this.form.get(field.name)?.setValue(changes['details'].currentValue[field.name])
      });

    }
  }
}



