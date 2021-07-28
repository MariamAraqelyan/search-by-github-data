import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../stores/reducers';
import {selectItems} from '../../stores/reducers'

@Component({
  selector: 'app-search-data-list',
  templateUrl: './search-data-list.component.html',
  styleUrls: ['./search-data-list.component.css']
})
export class SearchDataListComponent implements OnInit {

  public items :any[] | undefined;

  constructor(private store: Store<searchReducers.State>) {
    this.store.pipe(select(selectItems)).subscribe(items => {
        this.items = items;
      })

  }

  ngOnInit() : void{}
}
