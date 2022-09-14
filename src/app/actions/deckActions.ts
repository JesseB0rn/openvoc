import { Deck } from '../classes/deck';
import { DeckInProgress } from '../models/deckInProgress.model';

export class createDeck {
  static readonly type = '[Deck] create';
  constructor(public deck: Deck, public author: string) {}
}
export class syncDecks {
  static readonly type = '[Deck] start sync';
  constructor(public author: string) {}
}
export class updateDeck {
  static readonly type = '[Deck] update';
  constructor(public deck: Deck) {}
}
export class deleteDeck {
  static readonly type = '[Deck] delete';
  constructor(public uid: string) {}
}
export class gotRealtimeUpdate {
  static readonly type = '[Deck] realtime update';
  constructor(public decks: Deck[]) {}
}

export class saveLocalDeck {
  static readonly type = '[Deck] save progress';
  constructor(public deckIP: DeckInProgress) {}
}
