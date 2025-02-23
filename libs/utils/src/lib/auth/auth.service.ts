import { HttpClient } from '@angular/common/http';
import { Injectable,Inject } from '@angular/core';
import { ConfirmPassword, LoginResponse, LoginUser, RegisterUser, ResetPassword, User } from '@moolahmate/interfaces';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {APP_CONFIG} from '@moolahmate/app-config';

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


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private http: HttpClient, @Inject(APP_CONFIG) private environment: any) {
    this._isLoggedIn$.next(!!this.token);
    this.userToken = this.getUserToken(this.token);    
   }


   signin(user: LoginUser) {
    return this.http.post<LoginResponse>(this.environment.signin, user).pipe(
      tap((response: LoginResponse) => {
        this._isLoggedIn$.next(true);
        sessionStorage.setItem(this.TOKEN_NAME, response.accessToken);
        sessionStorage.setItem(this.REFRESH_TOKEN_NAME, response.refreshToken);
        sessionStorage.setItem('user',JSON.stringify(response.user));
      })
    )
   }

   signup(user: RegisterUser) {
    return this.http.post(this.environment.signup,user).pipe(
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
    return this.http.post(this.environment.forgotPassword, {mail: email}).pipe(tap((response: unknown) =>response));
   }

   confirmPassword(form: ConfirmPassword) {
    return this.http.post(this.environment.confirmPassword, form).pipe(tap((response: unknown) =>response));
   }

   resetPassword(form: ResetPassword) {
    return this.http.post(this.environment.changePassword, form).pipe(tap((response: unknown) =>response));
   }

   refreshToken(token: string, email: string) {
    return this.http.post<LoginResponse>(this.environment.refreshToken,{refreshToken: token, email: email}).pipe(tap((response:LoginResponse) => {
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
