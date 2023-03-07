import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from 'src/app/shared/modules/logo/logo.module';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/auth/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from 'src/app/auth/store/effects/login.effect';
import { NonAuthGuard } from 'src/app/shared/guards/non-auth.guard';
import { GetCurrentUserEffect } from 'src/app/auth/store/effects/get-current-user.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    LogoModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([LoginEffect, GetCurrentUserEffect]),
  ],
})
export class AuthModule {}
