import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedNewsComponent } from './recently-added-news.component';

describe('RecentlyAddedNewsComponent', () => {
  let component: RecentlyAddedNewsComponent;
  let fixture: ComponentFixture<RecentlyAddedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
