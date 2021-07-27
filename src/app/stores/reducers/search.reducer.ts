import {SearchActions} from "../actions/search.actions";

export interface SearchState {
  items:any[],
  isloading:Boolean,
  error:string


}

export const initialState: SearchState = {
  items:[],
  isloading:false,
  error:''
}

export function searchReducer(
  state = initialState,
  action: SearchActions
): SearchState {

}

