import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataItemComponent } from './search-data-item.component';

describe('SearchDataItemComponent', () => {
  let component: SearchDataItemComponent;
  let fixture: ComponentFixture<SearchDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
