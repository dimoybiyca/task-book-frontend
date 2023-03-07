import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'tb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  //isSubmitting$: Observable<boolean>;
  //backendErrors$: Observable<BackendErrorsInterface> | null;

  constructor(
    private fb: FormBuilder,
    private store: Store //private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initForm();
  }

  initValues(): void {
    //this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    //this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // const request: RegisterRequestInterface = {
    //   user: this.form.value,
    // };
    // this.store.dispatch(registerAction({ request }));
  }
}
