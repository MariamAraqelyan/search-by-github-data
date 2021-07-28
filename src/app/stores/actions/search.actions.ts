import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadSearch = '[Search] Load Searchs',
  LoadSearchSuccess = '[Search] Load Searches Success',
  LoadSearchFailure = '[Search] Load Searches Failure',
}

export class LoadSearch implements Action {
  readonly type = SearchActionTypes.LoadSearch;
  constructor(public searcValue:string, public loading:Boolean ) { }
}
export class LoadSearchSuccess implements Action {
  readonly type = SearchActionTypes.LoadSearchSuccess;
  constructor(public data:any,public loading:Boolean ) { }
}

export class LoadSearchFailure implements Action {
  readonly type = SearchActionTypes.LoadSearchFailure;
  constructor(public error: string, public loading:Boolean ) { }
}

export type SearchActions = LoadSearch | LoadSearchSuccess | LoadSearchFailure;

