import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string;

  constructor() { }

  setRole(role) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
