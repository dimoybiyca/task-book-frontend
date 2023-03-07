import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from 'src/app/auth/store/actions/login.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'tb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.initForm();
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    //this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      ...this.form.value,
      client_id: environment.client_id,
      grant_type: environment.grant_type,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
