import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, map } from 'rxjs';
import { SignOut } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  signedInEmail$: BehaviorSubject<boolean | undefined> = new BehaviorSubject<
    boolean | undefined
  >(undefined);
  signedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store) {
    this.store
      .select((state) => state.auth.signedUpAnon)
      .subscribe(this.signedInEmail$);
    this.store.select((state) => state.auth.auth).subscribe(this.signedIn$);
  }

  ngOnInit(): void {}

  signOut() {
    this.store.dispatch(new SignOut());
  }
}
