import { FormControl, FormGroup } from '@angular/forms';

export type FormFor<T> = {
  [P in keyof T]: T[P] extends 'object' ? FormGroup<FormFor<T[P]>> : FormControl<T[P]>;
};
