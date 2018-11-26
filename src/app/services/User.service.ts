import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }
    public getUserByDetails(username: string, password: string) {
        return this.httpClient.get<UserModel>(`http://localhost:51230/api/users/${username}/${password}`);
    }
    public addUser(user: UserModel): Observable<UserModel> {
        return this.httpClient.post<UserModel>("http://localhost:51230/api/users", user)
    }
}
