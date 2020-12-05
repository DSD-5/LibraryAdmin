import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/libro.module';
import { CatalogoServices } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private catalogServices: CatalogoServices
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    const products = this.catalogServices.getAllBooksLocal();
    this.books = products;
  }

  addCart() {
  }

}
