import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryNewsComponent } from './secondary-news.component';

describe('SecondaryNewsComponent', () => {
  let component: SecondaryNewsComponent;
  let fixture: ComponentFixture<SecondaryNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
