import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenDecodedInterface } from 'src/app/shared/types/token-decoded.interface';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  static decodeToken(token: string): TokenDecodedInterface {
    return jwtDecode(token);
  }
}
