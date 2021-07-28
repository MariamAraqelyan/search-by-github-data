import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {SearchActionTypes , LoadSearchSuccess, LoadSearchFailure} from '../actions/search.actions'

import { Observable,} from 'rxjs';
import { catchError, filter, mergeMap } from 'rxjs/operators';
import {SearchService} from '../../shared/services/search.service';


@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService:SearchService ) {}

  @Effect()
  loadSearchData: Observable<any> = this.actions$.pipe(
    ofType(SearchActionTypes.LoadSearch),
    mergeMap(action => {
      const searchResult = this.searchService.getSearch(
        action['searcValue']
      );
      return searchResult.pipe(
        mergeMap(response => {
          // @ts-ignore
          return [new LoadSearchSuccess(response['items'] ,false)]
        }),
        catchError(error=>{
            return [new LoadSearchFailure(error.message,false)]
          }
        )
      );
    })
  );

}
