import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  AppUrl: string;
  constructor(private http: HttpClient) {
    this.AppUrl = environment.endpoint;
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // getUser(id: number): Observable<User> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<User>(url);
  // }

  // addUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }

  // updateUser(user: User): Observable<any> {
  //   const url = `${this.apiUrl}/${user.id}`;
  //   return this.http.put(url, user);
  // }

  // deleteUser(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url);
  // }
}


// NOTE:
//   In this example, the UserService is defined as an injectable service using the @Injectable decorator. It uses the HttpClient module to make HTTP requests to a RESTful API.
//
//   The getUsers() method makes a GET request to the API endpoint to get a list of users. The getUser(id) method makes a GET request to the API endpoint to get a specific user by ID.
//   The addUser(user) method makes a POST request to the API endpoint to add a new user. The updateUser(user) method makes a PUT request to the API endpoint to update an existing user.
//   Finally, the deleteUser(id) method makes a DELETE request to the API endpoint to delete a user by ID.
//
//   Note that in this example, the User interface is used to define the shape of the user data returned by the API. You will need to define this interface according to the specific
//   data structure of your API.
