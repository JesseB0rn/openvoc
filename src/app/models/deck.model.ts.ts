import { Deck } from '../classes/deck';

export interface DeckStoreModel {
  decks: Deck[];

  localDecks: Deck[];
}
