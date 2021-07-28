import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataInfoComponent } from './search-data-info.component';

describe('SearchDataInfoComponent', () => {
  let component: SearchDataInfoComponent;
  let fixture: ComponentFixture<SearchDataInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
