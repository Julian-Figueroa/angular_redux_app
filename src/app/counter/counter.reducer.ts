import * as fromActions from './counter.actions';

export function counterReducer(state: number = 10, action: fromActions.actions) {
    switch (action.type) {
        case fromActions.INCREMENTAL:
            return state + 1;

        case fromActions.DECREMENTAL:
            return state - 1;

        case fromActions.MULTIPLY:
            return state * action.paylod;

        case fromActions.DIVIDE:
            return state / action.paylod;

        case fromActions.RESET:
            return state = 0;

        default:
            return state;
    }
}