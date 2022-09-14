import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SignInAnon, SignInWAccount } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {}

  anon() {
    this.store.dispatch(new SignInAnon());
  }
  login() {
    this.store.dispatch(
      new SignInWAccount(
        this.loginGroup.value['email'],
        this.loginGroup.value['pwd']
      )
    );
  }
}
