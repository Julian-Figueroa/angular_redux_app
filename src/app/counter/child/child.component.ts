import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  multiply() {
    // this.counter *= 2;
    // this.counterChange.emit(this.counter);
    const action = new MultiplyAction(5);

    this.store.dispatch(action);
  }

  divide() {
    // this.counter /= 2;
    // this.counterChange.emit(this.counter);
    const action = new DivideAction(5);

    this.store.dispatch(action);
  }

  // resetGrandson(newCounter) {
  //   this.counter = newCounter;
  //   // this.counterChange.emit(this.counter);
  // }

}
