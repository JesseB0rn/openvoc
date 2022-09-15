import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignOut } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  signOut() {
    this.store.dispatch(new SignOut());
  }
}
