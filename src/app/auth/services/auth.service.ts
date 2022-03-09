import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(private readonly fireAuth: AngularFireAuth) {}
  login(mail: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(mail, password);
  }
  // register(mail: string, password: string): Promise<any> {
  // return this.fireAuth.createUserWithEmailAndPassword(mail, password);
  // }

  logout() {
    this.fireAuth.signOut();
  }
}
