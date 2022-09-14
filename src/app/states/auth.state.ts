import { Injectable, Optional } from '@angular/core';
import {
  Auth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import {
  RegisterAccount,
  SignedInSucc,
  SignInAnon,
  SignInWAccount,
  SignOut,
} from '../actions/auth.actions';
import { AuthStateModel } from '../models/auth.model';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    auth: false,
    user: undefined,
  },
})
@Injectable()
export class AuthState {
  constructor(
    public auth: Auth,
    private sbs: MatSnackBar,
    private store: Store
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.store.dispatch(new SignedInSucc(user));
        this.sbs.open('Angemeldet');
      } else {
      }
    });
  }

  @Action(SignInWAccount)
  signIn(
    { dispatch }: StateContext<AuthStateModel>,
    credentials: SignInWAccount
  ) {
    signInWithEmailAndPassword(this.auth, credentials.email, credentials.pwd)
      .then((user) => {
        // dispatch(new SignedInSucc(user.user));
      })
      .catch((err) => {
        this.sbs.open(err);
      });
  }

  @Action(RegisterAccount)
  register(
    { dispatch }: StateContext<AuthStateModel>,
    { email, pwd }: RegisterAccount
  ) {
    createUserWithEmailAndPassword(this.auth, email, pwd)
      .then((user) => {
        // dispatch(new SignedInSucc(user.user));
      })
      .catch((err) => {
        this.sbs.open(err);
      });
  }

  @Action(SignInAnon)
  signInAnon({ dispatch }: StateContext<AuthStateModel>) {
    signInAnonymously(this.auth)
      .then((user) => {
        // dispatch(new SignedInSucc(user.user));
      })
      .catch((err) => {
        this.sbs.open(err);
      });
  }
  @Action(SignOut)
  signout({ setState }: StateContext<AuthStateModel>) {
    this.auth.signOut().then(() => {
      setState({
        auth: false,
        user: undefined,
      });
      this.sbs.open('Abgemeldet');
    });
  }
  @Action(SignedInSucc)
  signedIn({ patchState }: StateContext<AuthStateModel>, user: SignedInSucc) {
    patchState({
      auth: true,
      user: user.user,
    });
  }
}
