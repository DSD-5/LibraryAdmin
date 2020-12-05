import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../constantes";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationServices {

    constructor(private http: HttpClient) {}

    // login() {
    //     let credenciales = btoa('angularapp'+ ':'+ '12345');
    //     let header = new HttpHeaders({
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic '+credenciales,
    //     });
    //     let params = new URLSearchParams();
    //     params.set('grant_type','password');
    //     params.set('username','mriosalvar');
    //     params.set('password','123456');
    //     return this.http.post<any>(environment.LOGIN, params.toString(),{headers: header});
    // }

    login(user: string, pass: string): Observable<any> {
      let credenciales = btoa('angularapp'+ ':'+ '12345');
      let header = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic '+credenciales,
      });
      let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username',user);
      params.set('password',pass);
      return this.http.post<any>(environment.LOGIN, params.toString(),{headers: header}).pipe(map(response => {
          // console.log(response.access_token);
          localStorage.setItem('token',response.access_token);
          return response;
      }));
  }
}
