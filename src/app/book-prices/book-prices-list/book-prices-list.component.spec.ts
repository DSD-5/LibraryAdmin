import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPricesListComponent } from './book-prices-list.component';

describe('PricesListComponent', () => {
  let component: BookPricesListComponent;
  let fixture: ComponentFixture<BookPricesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPricesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
