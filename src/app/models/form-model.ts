import { FormGroup } from "@angular/forms";
export type FormModel<T> = { [P in keyof T]: [T[P], any?] | FormGroup };
