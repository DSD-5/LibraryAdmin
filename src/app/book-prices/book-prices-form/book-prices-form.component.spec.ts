import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPricesFormComponent } from './book-prices-form.component';

describe('BookPricesFormComponent', () => {
  let component: BookPricesFormComponent;
  let fixture: ComponentFixture<BookPricesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPricesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPricesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
