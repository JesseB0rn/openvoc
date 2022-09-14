import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignInAnon } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  anon() {
    this.store.dispatch(new SignInAnon());
  }
}
