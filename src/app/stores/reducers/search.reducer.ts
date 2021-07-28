import {SearchActions, SearchActionTypes} from '../actions/search.actions'

export interface SearchState {
  items:any[] | undefined,
  loading:Boolean,
  error:string
}

export const initialState: SearchState = {
  items:[],
  loading:false,
  error:''
}

export function searchReducer(state: SearchState = initialState, action: SearchActions): SearchState {
  switch (action.type) {
    case SearchActionTypes.LoadSearchSuccess:
      return {
        ...state,
        items:action.data,
        loading:action.loading,
        error:''
      };

    case SearchActionTypes.LoadSearch:
      return {
        ...state,
        loading:action.loading
      };

    case SearchActionTypes.LoadSearchFailure:
      return {
        ...state,
        loading:action.loading,
        error:action.error
      };

    default:
      return state;
  }
}
