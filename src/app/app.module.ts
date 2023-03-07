import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { SideNavModule } from 'src/app/shared/modules/side-nav/side-nav.module';
import { MainModule } from 'src/app/main/main.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';
import { AuthModule } from 'src/app/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { NonAuthGuard } from 'src/app/shared/guards/non-auth.guard';
import { AccessTokenInterceptorProviders } from 'src/app/auth/services/access-token-interceptor.service';
import { StatisticModule } from 'src/app/statistic/statistic.module';
import { RefreshTokenInterceptorProviders } from 'src/app/auth/services/refresh-token-interceptor.service';
import { TasksModule } from 'src/app/tasks/tasks.module';
import { ModalModule } from 'src/app/modal/modal.module';

@NgModule({
  providers: [
    AuthGuard,
    NonAuthGuard,
    AccessTokenInterceptorProviders,
    RefreshTokenInterceptorProviders,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    SideNavModule,
    MainModule,
    AuthModule,
    StatisticModule,
    TasksModule,
    ModalModule,
  ],
})
export class AppModule {}
