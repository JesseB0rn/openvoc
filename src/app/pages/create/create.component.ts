import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { createDeck as addDeck } from 'src/app/actions/deckActions';
import { Deck } from 'src/app/classes/deck';
import { CSVToArray } from 'src/app/utilities/csv-parser';
import { validCSVValidator } from 'src/app/validators/validCSV';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createGroup: FormGroup = this.fb.group({
    deck: ['', [Validators.required]],
    csv: ['', [Validators.required, validCSVValidator]],
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  user$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.store.select((state) => state.auth.user).subscribe(this.user$);
  }

  createDeck() {
    let deck = new Deck(
      this.createGroup.value['deck'],
      CSVToArray(this.createGroup.value['csv'], '\t')
    );
    this.store.dispatch(new addDeck(deck, `${this.user$.getValue()}`));
  }
}
