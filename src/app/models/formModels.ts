import {Validators} from "@angular/forms";

export interface FormField {
  type: string,
  label: string,
  name: string,
  value?: string,
  validation?: Validators
}
