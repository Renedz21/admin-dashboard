import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../models/interfaces/user.interface';
import { Users } from '../models/classes/users.class';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${environment.apiUrl}/auth`);
  }

  create(users: Users): Observable<Users> {
    return this.http.post<Users>(`${environment.apiUrl}/users`, users);
  }
}
