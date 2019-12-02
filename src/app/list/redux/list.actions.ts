import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/user.interface';

export const readUser = createAction('[User] Read', props<{ user: IUser }>());
export const clearUser = createAction('[User] Clear');
