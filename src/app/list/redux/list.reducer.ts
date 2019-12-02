import { createReducer, on, State, Action } from '@ngrx/store';
import * as listActions from './list.actions';
import { IUser } from 'src/app/interfaces/user.interface';

export const initialState = null;

const listReducer = createReducer(initialState,
    on(listActions.readUser, (state, { user }) => user),
    on(listActions.clearUser, (state) => initialState)
);

export function reducer(state: IUser | undefined, action: Action) {
    return listReducer(state, action);
}
