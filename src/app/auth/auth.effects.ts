import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {AuthActions} from './actions-types';
import {tap} from 'rxjs/operators';



@Injectable()
export class AuthEffects {

  private login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.login),
      tap((action) => localStorage.setItem('user', JSON.stringify(action.user)))
    ),
    { dispatch: false }
  );

  private logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap((action) => localStorage.removeItem('user'))
    ),
    { dispatch: false }
  );


  constructor(private actions$: Actions) {}

}
