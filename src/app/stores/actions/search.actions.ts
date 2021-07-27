import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadSearch = '[Search] Load Searchs',
  LoadSearchSuccess = '[Search] Load Searchs Success',
  LoadSearchFailure = '[Search] Load Searchs Failure',
}

export class LoadSearch implements Action {

}

export class LoadSearchSuccess implements Action {

}

export class LoadSearchFailure implements Action {

}

export type SearchActions = LoadSearch | LoadSearchSuccess | LoadSearchFailure;
