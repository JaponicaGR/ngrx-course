import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthState} from '../auth/reducers';

export interface AppState {
  //auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {

};

