import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { BehaviorSubject, debounceTime, take } from 'rxjs';
import {
  createDeck as addDeck,
  saveLocalDeck,
} from 'src/app/actions/deckActions';
import { Deck, Worldlist } from 'src/app/classes/deck';
import { DeckInProgress } from 'src/app/models/deckInProgress.model';
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
  deckIP$: BehaviorSubject<DeckInProgress | undefined> = new BehaviorSubject<
    DeckInProgress | undefined
  >(undefined);

  ngOnInit(): void {
    this.store.select((state) => state.auth.user).subscribe(this.user$);
    this.store.select((state) => state.decks.localDeck).subscribe(this.deckIP$);

    this.deckIP$.pipe(take(1)).subscribe((val) => {
      if (val) {
        this.createGroup.setValue({
          deck: val.name,
          csv: val.body,
        });
      }
    });

    this.createGroup.valueChanges.pipe(debounceTime(350)).subscribe((val) => {
      this.store.dispatch(
        new saveLocalDeck({
          name: this.createGroup.value['deck'],
          body: this.createGroup.value['csv'],
        })
      );
    });
  }

  createDeck() {
    let cardsAsDict: Worldlist = {};
    CSVToArray(this.createGroup.value['csv'], '\t').forEach((card, index) => {
      console.log(card);
      cardsAsDict[index] = {
        def: card[0] || null,
        answ: card[1] || null,
      };
    });

    let deck = new Deck(this.createGroup.value['deck'], cardsAsDict);
    this.store.dispatch(new addDeck(deck, `${this.user$.getValue()}`));
  }
}
