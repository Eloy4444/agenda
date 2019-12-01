import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginAccess(userInfo){
   return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto/',{observe:'response'});
  }
}