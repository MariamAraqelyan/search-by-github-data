import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../stores/reducers';
import {selectItems} from '../../stores/reducers'

@Component({
  selector: 'app-search-data-info',
  templateUrl: './search-data-info.component.html',
  styleUrls: ['./search-data-info.component.css']
})
export class SearchDataInfoComponent implements OnInit {

  public items:any[] | undefined;
  public item:any | {};

  constructor( private route: ActivatedRoute,private store: Store<searchReducers.State>) {
    this.store
      .pipe(select(selectItems))
      .subscribe(items => {
        this.items = items;
      })
  }

  ngOnInit() {
    this.item= this.items?.length ? this.items.filter(item => item.id==this.route.snapshot.params.id)[0] : {};
  }

  goBack() {
    window.history.back();
  }

}
