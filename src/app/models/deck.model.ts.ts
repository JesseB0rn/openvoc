import { Deck } from '../classes/deck';
import { DeckInProgress } from './deckInProgress.model';

export interface DeckStoreModel {
  decks: Deck[];

  localDeck: DeckInProgress | undefined;
}
