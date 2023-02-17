import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './customInput.component.html',
  styleUrls: ['./customInput.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() fieldName!: string;
  @Input() value?: string;
  @Input() required: boolean = false;
  @Output() form: FormGroup<{}> = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    const formControls: any = {};

    formControls[this.fieldName] = [this.value, '']

    this.form.addControl(this.fieldName, new FormControl('', Validators.nullValidator))

    if (this.value) {
      this.form.get(this.fieldName)?.setValue(this.value)
    }

    if (this.required)
      this.form.get(this.fieldName)?.setValidators(Validators.required)
  }

}

