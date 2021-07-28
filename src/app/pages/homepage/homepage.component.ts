import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as searchReducers from '../../stores/reducers/index';
import {selectIsloading , selectError} from '../../stores/reducers'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public loading : Boolean = false;
  public error : string = '';

  constructor(private store: Store<searchReducers.State>) {
    this.store.pipe(select(selectIsloading)).subscribe(isLoading => {
        this.loading = isLoading;
      });

    this.store.pipe(select(selectError)).subscribe(error => {
        this.error = error;
      });
  }

  ngOnInit(): void {}

}
