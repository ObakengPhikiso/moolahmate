import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfirmPassword, LoginResponse, LoginUser, RegisterUser, ResetPassword, User } from '@moolahmate/interfaces';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'client_token';
  private readonly REFRESH_TOKEN_NAME = 'client_refresh_token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  userToken: User | null;

  get token(): string | null {
    return sessionStorage.getItem(this.TOKEN_NAME) || null;
  }
  get refresh_token(): string | null {
    return sessionStorage.getItem(this.REFRESH_TOKEN_NAME) || null;
  }

  get currUser(): unknown | null {
    const currUser = sessionStorage.getItem('user');
    return currUser;
  }


  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.userToken = this.getUserToken(this.token);    
   }


   signin(user: LoginUser) {
    console.log(process.env);
    
    return this.http.post<LoginResponse>(process.env['MOOLAH_MATE_SIGNIN_URL'] || '', user).pipe(
      tap((response: LoginResponse) => {
        this._isLoggedIn$.next(true);
        sessionStorage.setItem(this.TOKEN_NAME, response.accessToken);
        sessionStorage.setItem(this.REFRESH_TOKEN_NAME, response.refreshToken);
        sessionStorage.setItem('user',JSON.stringify(response.user));
      })
    )
   }

   signup(user: RegisterUser) {
    return this.http.post(process.env['MOOLAH_MATE_SIGNUP_URL'] || '',user).pipe(
      tap((response: unknown) => {
        return response
      })
    )
   }

   logout():Promise<boolean> {

    const res = new Promise<boolean>((resolve, reject) => {
      sessionStorage.removeItem(this.TOKEN_NAME);
      sessionStorage.removeItem(this.REFRESH_TOKEN_NAME);
      sessionStorage.removeItem('user');
      this._isLoggedIn$.next(false);
      resolve(true)
    })
    return res
   }

   forgotPassword(email: string) {
    return this.http.post(process.env['MOOLAH_MATE_FORGOT_PASSWORD_URL'] || '', {mail: email}).pipe(tap((response: unknown) =>response));
   }

   confirmPassword(form: ConfirmPassword) {
    return this.http.post(process.env['MOOLAH_MATE_CONFIRM_PASSWORD'] || '', form).pipe(tap((response: unknown) =>response));
   }

   resetPassword(form: ResetPassword) {
    return this.http.post(process.env['MOOLAH_MATE_CHANGE_PASSWORD'] || '', form).pipe(tap((response: unknown) =>response));
   }

   refreshToken(token: string, email: string) {
    return this.http.post<LoginResponse>(process.env['MOOLAH_MATE_REFRESH_TOKEN_URL'] || '',{refreshToken: token, email: email}).pipe(tap((response:LoginResponse) => {
      this._isLoggedIn$.next(true);
      sessionStorage.setItem(this.TOKEN_NAME, response.accessToken);
      sessionStorage.setItem(this.REFRESH_TOKEN_NAME, response.refreshToken);
      sessionStorage.setItem('user',JSON.stringify(response.user));
    }));
   }

   private getUserToken(token: string | null): User | null {
    if(!token) {
      return null;
    }
    return JSON.parse(atob(token.split('.')[1])) as User
   }


}
