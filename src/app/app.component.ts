import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementalAction, DecrementalAction } from './counter/counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    // this.counter = 10;
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  incremental() {
    // this.counter++;
    // const action: Action = {
    //   type: INCREMENTAL
    // };
    const action = new IncrementalAction();

    this.store.dispatch(action);
  }

  decremental() {
    // this.counter--;
    // const action: Action = {
    //   type: DECREMENTAL
    // };
    const action = new DecrementalAction();

    this.store.dispatch(action);
  }
}
