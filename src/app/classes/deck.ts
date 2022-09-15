import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';

export class Deck {
  uid: string = '-- none --';
  author: string = '';
  constructor(public name: string, public cards: Worldlist) {}

  static converter = {
    toFirestore: (deck: Deck): DocumentData => {
      console.log('converted');
      return { name: deck.name, cards: deck.cards, author: deck.author };
    },
    fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
    ): Deck => {
      const data = snapshot.data(options)!;

      let d = new Deck(data['name'], data['cards']);
      d.uid = snapshot.id;
      d.author = data['author'];
      return d;
    },
  };
  get length() {
    return Object.keys(this.cards).length;
  }
}

export type Worldlist = {
  [key: number]: {
    def: string | null;
    answ: string | null;
  };
};
