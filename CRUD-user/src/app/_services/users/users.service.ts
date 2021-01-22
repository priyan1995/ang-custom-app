import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) {   }

  addUser(user){
    return this._http.post(environment.apiUrl + '/create-user.php', user);
  }


}
