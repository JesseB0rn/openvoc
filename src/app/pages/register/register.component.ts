import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { RegisterAccount } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerGroup: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {}

  register() {
    this.store.dispatch(
      new RegisterAccount(
        this.registerGroup.value['email'],
        this.registerGroup.value['pwd']
      )
    );
  }
}
