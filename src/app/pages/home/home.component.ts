import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Deck } from 'src/app/classes/deck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();

  cols = 2;
  ratio: string = '2:1';

  decks$: BehaviorSubject<Deck[]> = new BehaviorSubject<Deck[]>([]);

  constructor(private store: Store, breakpointObserver: BreakpointObserver) {
    this.store.select((state) => state.decks.decks).subscribe(this.decks$);

    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        if (
          result.breakpoints[Breakpoints.XSmall] ||
          result.breakpoints[Breakpoints.Small]
        ) {
          this.cols = 1;
          this.ratio = '3:1';
        } else {
          this.cols = 2;
          this.ratio = '2:1';
        }
      });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
