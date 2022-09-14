import { User } from '@angular/fire/auth';

export class SignInWAccount {
  static readonly type = '[Auth] sign in w/ account';
  constructor(public email: string, public pwd: string) {}
}
export class RegisterAccount {
  static readonly type = '[Auth] register';
  constructor(public email: string, public pwd: string) {}
}
export class SignInAnon {
  static readonly type = '[Auth] sign anon';
  constructor() {}
}
export class SignOut {
  static readonly type = '[Auth] sign out';
}
export class SignedInSucc {
  static readonly type = '[Auth] sign in succ';
  constructor(public user: User) {}
}
