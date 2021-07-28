import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../stores/reducers';
import {LoadSearch} from '../../stores/actions/search.actions';
import {selectItems} from '../../stores/reducers'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue:string ='';
  items:any[] | undefined;
  constructor(private store: Store<searchReducers.State>,
  ) {
    this.store
      .pipe(select(selectItems))
      .subscribe(items => {
        this.items = items;
      });
  }

  ngOnInit() {
  }

  valueChange(newValue: any) {
    this.store.dispatch(
      new LoadSearch (newValue,true)
    );
  }

}
