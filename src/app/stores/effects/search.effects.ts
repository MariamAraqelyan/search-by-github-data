import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {SearchActionTypes , LoadSearchSuccess, LoadSearchFailure} from '../actions/search.actions';
import { Observable,} from 'rxjs';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions) {
  }
}
