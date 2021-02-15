import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {authReducer, AuthState} from '../auth/reducers';
import {routerReducer} from '@ngrx/router-store';
import {state} from '@angular/animations';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {

  return (state, action) => {
    console.log('Before State: ', state);
    console.log('Before Action: ', action.type);

    return reducer(state, action);
  };

}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
