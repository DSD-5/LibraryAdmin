import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogoServices } from 'src/app/services/catalogo.service';
import { Constants } from 'src/app/utils/constants';
import { BookPricesFormComponent } from '../book-prices-form/book-prices-form.component';

@Component({
  selector: 'app-book-prices-list',
  templateUrl: './book-prices-list.component.html',
  styleUrls: ['./book-prices-list.component.css']
})
export class BookPricesListComponent implements OnInit {

  libro: any;
  books: MatTableDataSource<any>;
  displayedColumns: string[] =
  [ 'id',
    'image',
    'title',
    'coinId',
    'price',
    'pricerental',
    'state',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  loading = Constants.loading;
  noData = Constants.noData;

  constructor(
    private catalogoServices: CatalogoServices,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllCatalogs();
    this.catalogoServices.listarLibros().subscribe(result => {
      this.libro = result;
      console.log(this.libro);
    });
  }

  getAllCatalogs() {
    const result = this.catalogoServices.getAllBooksLocal();
    if (result !== null) {
      this.books = new MatTableDataSource(result);
      this.books.sort = this.sort;
      this.books.paginator = this.paginator;
    }
  }

  edit(row: any): void {
    const dialogConfig = this.dialogConfig();
    dialogConfig.data = row;
    this.dialog
    .open(BookPricesFormComponent, dialogConfig)
    .afterClosed()
      .subscribe(result => {
        if (result) {
          this.getAllCatalogs();
        }
      });
  }

  applyFilter() {
    this.books.filter = this.searchKey.trim().toLowerCase();
  }

  searchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  dialogConfig() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    return dialogConfig;
  }
}
