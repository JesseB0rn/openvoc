import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';

export class Deck {
  uid: string = '-- none --';
  author: string = '';
  constructor(public name: string, public cards: string[][]) {}

  static converter = {
    toFirestore: (deck: Deck): DocumentData => {
      let cardsAsDict: {
        [key: number]: {
          def: string | null;
          answ: string | null;
        };
      } = {};
      deck.cards.forEach((card, index) => {
        console.log(card);
        cardsAsDict[index] = {
          def: card[0] || null,
          answ: card[1] || null,
        };
      });
      console.log('converted');
      return { name: deck.name, cards: cardsAsDict, author: deck.author };
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
}
