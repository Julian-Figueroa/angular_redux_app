import { Action } from '@ngrx/store';
export const INCREMENTAL = '[Counter] Incremental';
export const DECREMENTAL = '[Counter] Decremental';
export const MULTIPLY = '[Counter] Multiply';
export const DIVIDE = '[Counter] Divide';
export const RESET = '[Counter] Reset';

export class IncrementalAction implements Action {
    readonly type = INCREMENTAL;
}

export class DecrementalAction implements Action {
    readonly type = DECREMENTAL;
}

export class MultiplyAction implements Action {
    readonly type = MULTIPLY;

    constructor(public paylod: number) { };
}

export class DivideAction implements Action {
    readonly type = DIVIDE;
    constructor(public paylod: number) { };
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type actions = IncrementalAction | DecrementalAction | MultiplyAction | DivideAction | ResetAction;