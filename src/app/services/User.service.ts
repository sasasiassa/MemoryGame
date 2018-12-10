import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public getUserByDetails(user: UserModel) { // Get user by the details, for log in
        return this.httpClient.post<UserModel>(`http://localhost:51230/api/users/login`, user);
    }

    public getOneUser(id: number) { // Get one user by ID
        return this.httpClient.get<UserModel>(`http://localhost:51230/api/users/${id}`);
    }

    public getAllUsers(): Observable<UserModel[]> { // Get all users.
        return this.httpClient.get<UserModel[]>('http://localhost:51230/api/users');
    }

    public addUser(user: UserModel): Observable<UserModel> { // Add a user when registered.
        return this.httpClient.post<UserModel>("http://localhost:51230/api/users", user);
    }
    
    public getUserDetailsById(id: number) { // Gets the user details by ID
        return this.httpClient.get<UserModel>(`http://localhost:51230/api/users/${id}/user-details`);
    }
}
