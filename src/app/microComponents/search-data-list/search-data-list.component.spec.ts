import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataListComponent } from './search-data-list.component';

describe('SearchDataListComponent', () => {
  let component: SearchDataListComponent;
  let fixture: ComponentFixture<SearchDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
