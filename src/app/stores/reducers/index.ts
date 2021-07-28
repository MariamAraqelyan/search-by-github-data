import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {searchReducer,SearchState} from './search.reducer'


export interface State {
  searchState:SearchState
}


export const reducers: ActionReducerMap<State, any> = {
  searchState :searchReducer

};

export const searchFeatureState = createFeatureSelector<
  State,
  SearchState
  >('searchState');

export const selectItems = createSelector(
  searchFeatureState,
  state => state.items
);


export const selectIsloading = createSelector(
  searchFeatureState,
  state => state.loading
);

export const selectError = createSelector(
  searchFeatureState,
  state => state.error
);




export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
