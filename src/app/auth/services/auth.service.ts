import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';
import { Observable, map, tap } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment.development';
import { TokenResponseInterface } from 'src/app/auth/types/token-response.interface';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import jwtDecode from 'jwt-decode';
import { JwtService } from 'src/app/shared/services/jwt.service';
import { Token } from 'src/app/auth/types/token.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().append(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );

  constructor(private http: HttpClient) {}

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.authUrl;

    let body = new URLSearchParams();
    body.set('client_id', environment.client_id);
    body.set('grant_type', 'password');
    body.set('username', data.username);
    body.set('password', data.password);

    return this.http
      .post<TokenResponseInterface>(url, body, {
        headers: this.headers,
      })
      .pipe(
        tap(this.saveTokens),
        map((response: TokenResponseInterface) =>
          this.getUser(response.access_token)
        )
      );
  }

  refreshToken(): Observable<TokenResponseInterface> {
    const url = environment.authUrl;

    let body = new URLSearchParams();
    body.set('client_id', environment.client_id);
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', PersistenceService.get('refresh_token'));

    return this.http.post<TokenResponseInterface>(url, body, {
      headers: this.headers,
    });
  }

  public getCurrentUser(accessToken: Token): CurrentUserInterface {
    return this.getUser(accessToken);
  }

  private getUser(accessToken: string): CurrentUserInterface {
    let jwt = JwtService.decodeToken(accessToken);

    let user: CurrentUserInterface = {
      id: jwt.sub,
      name: jwt.name,
      email: jwt.email,
      username: jwt.preferred_username,
      image: jwt.preferred_username,
    };

    return user;
  }

  private saveTokens(response: TokenResponseInterface): void {
    PersistenceService.set('access_token', response.access_token);
    PersistenceService.set('refresh_token', response.refresh_token);
  }
}
