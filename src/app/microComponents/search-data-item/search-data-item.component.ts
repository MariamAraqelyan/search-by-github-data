import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-data-item',
  templateUrl: './search-data-item.component.html',
  styleUrls: ['./search-data-item.component.css']
})
export class SearchDataItemComponent implements OnInit {
  @Input() item:any;

  constructor( private router: Router) { }

  ngOnInit() : void{}

  showItemDetails(id: string){
    this.router.navigate(['/item',id])
  }

}
