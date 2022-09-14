import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  onSnapshot,
  query,
} from '@angular/fire/firestore';
import { updateDoc, where } from '@firebase/firestore';
import { Action, State, StateContext, Store } from '@ngxs/store';
import {
  createDeck,
  deleteDeck,
  gotRealtimeUpdate,
  saveLocalDeck,
  syncDecks,
  updateDeck,
} from '../actions/deckActions';
import { Deck } from '../classes/deck';
import { DeckStoreModel } from '../models/deck.model.ts';

@State<DeckStoreModel>({
  name: 'decks',
  defaults: {
    decks: [],
    localDeck: undefined,
  },
})
@Injectable()
export class DeckStore {
  constructor(private db: Firestore) {}

  @Action(createDeck)
  async createDeck(
    { patchState }: StateContext<DeckStoreModel>,
    { deck, author }: createDeck
  ) {
    deck.author = author;
    await addDoc(
      collection(this.db, 'decks').withConverter(Deck.converter),
      deck
    );
    patchState({
      localDeck: undefined,
    });
  }

  @Action(updateDeck)
  async updateDeck({}: StateContext<DeckStoreModel>, { deck }: updateDeck) {
    let ref = doc(this.db, `decks/${deck.uid}`).withConverter(Deck.converter);
    await updateDoc(ref, deck);
  }

  @Action(syncDecks)
  async syncDecks(
    { dispatch }: StateContext<DeckStoreModel>,
    { author }: syncDecks
  ) {
    let ref = collection(this.db, 'decks').withConverter(Deck.converter);
    let q = query(ref, where('author', '==', author));
    let decks: Deck[] = [];
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        decks.push(doc.data());
      });

      dispatch(new gotRealtimeUpdate(decks));
    });
  }

  @Action(gotRealtimeUpdate)
  async gotRealtimeUpdate(
    { patchState }: StateContext<DeckStoreModel>,
    { decks }: gotRealtimeUpdate
  ) {
    patchState({
      decks: decks,
    });
  }

  @Action(deleteDeck)
  async deleteDeck({}: StateContext<DeckStoreModel>, { uid }: deleteDeck) {
    let ref = doc(this.db, `decks/${uid}`).withConverter(Deck.converter);
    deleteDoc(ref);
  }

  @Action(saveLocalDeck)
  function(
    { patchState }: StateContext<DeckStoreModel>,
    { deckIP }: saveLocalDeck
  ) {
    patchState({
      localDeck: deckIP,
    });
  }
}
