import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogoServices } from 'src/app/services/catalogo.service';
import { Constants } from 'src/app/utils/constants';
import { BookFormComponent } from '../book-form/book-form.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../constantes";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {AuthenticationServices} from '../../services/authentication.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: MatTableDataSource<any>;
  displayedColumns: string[] =
  [ 'id',
    'title',
    'description',
    'genderId',
    'state',
    'coinId',
    'stockventa',
    'priceventa',
    'stockrenta',
    'pricerenta',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  libro: any;
  searchKey: string;
  loading = Constants.loading;
  noData = Constants.noData;

  constructor(
    private catalogoServices: CatalogoServices,
    private dialog: MatDialog,
    private http: HttpClient,
    private auth: AuthenticationServices,
  ) { }

  ngOnInit(): void{

    this.auth.login('admin', '123456').subscribe(result => {
      localStorage.setItem('token', result.access_token);
      console.log(result.access_token);
    },
    error =>{
      console.log(error);
    });


    this.catalogoServices.listarLibro().subscribe(result => {
      this.libro = result;
      console.log(this.libro);
    });
  }

  // getAllCatalogs():Observable<any> {



  //   // const result = this.catalogoServices.getAllBooksLocal();

  //   // if (result !== null) {
  //   //   this.books = new MatTableDataSource(result);
  //   //   this.books.sort = this.sort;
  //   //   this.books.paginator = this.paginator;
  //   // }
  // }

  create(): void {

    const person = {
      tipo: '',
    };
    let row = Object.create(person);
    row.tipo = 'create';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = row;
    //return dialogConfig;
    //const dialogConfig = this.dialogConfig();
    this.dialog
    .open(BookFormComponent, dialogConfig)
    .afterClosed()
      .subscribe(result => {

      });
  }

  edit(row: any): void {
    row.tipo = 'edit';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = row;
    this.dialog
    .open(BookFormComponent, dialogConfig)
    .afterClosed()
      .subscribe(result => {
        
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
    dialogConfig.width = '60%';
    return dialogConfig;
  }
}
