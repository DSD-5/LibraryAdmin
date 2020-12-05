import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogoServices } from 'src/app/services/catalogo.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { Constants } from './../../utils/constants';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: MatTableDataSource<any>;
  displayedColumns: string[] =
  [ 'id',
    'user',
    'nombres',
    'apellidoPaterno',
    'apellidoMaterno',
    'email',
    'tipoDocumentoId',
    'numeroDocumento',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  loading = Constants.loading;
  noData = Constants.noData;
  successMessage = Constants.successMessage;

  constructor(
    private catalogoServices: CatalogoServices,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    //this.getAllCatalogs();
  }

  // getAllCatalogs() {
  //   this.catalogoServices.listarLibros(1)
  //   .subscribe(
  //     result => {
  //       this.users = new MatTableDataSource(result);
  //       this.users.sort = this.sort;
  //       this.users.paginator = this.paginator;
  //     });
  // }

  // create(): void {
  //   const dialogConfig = this.dialogConfig();
  //   this.dialog
  //   .open(UserFormComponent, dialogConfig)
  //   .afterClosed()
  //     .subscribe(result => {
  //       if (result) {
  //         this.getAllCatalogs();
  //       }
  //     });
  // }

  // edit(row: any): void {
  //   const dialogConfig = this.dialogConfig();
  //   dialogConfig.data = row;
  //   this.dialog
  //   .open(UserFormComponent, dialogConfig)
  //   .afterClosed()
  //     .subscribe(result => {
  //       if (result) {
  //         this.getAllCatalogs();
  //       }
  //     });
  // }

  applyFilter() {
    this.users.filter = this.searchKey.trim().toLowerCase();
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
