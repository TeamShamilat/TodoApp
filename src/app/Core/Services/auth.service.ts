import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { of, EMPTY, Observable } from 'rxjs';
import { ApiResponse } from '../model/response.type';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>('https://localhost:44381/api/security/security/login', {  email, password });
    }
    register(email: string, password: string, username: string) {
        const tenantId= '1';
        return this.http.post('https://localhost:44381/api/security/security/Register', { username, email, password,tenantId });
    }
}