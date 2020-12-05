import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../constantes';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Book } from '../models/libro.module';

@Injectable({
    providedIn: 'root'
})
export class CatalogoServices {

    constructor(
        private http: HttpClient
    ) {}

    url = environment.CATALOGO;

    listarLibros(): Observable<any>{

      return this.http.get<any>(environment.CATALOGO, {
      }).pipe(map(response => {
          return response;
      }))
  }

    detalleLibro(id: number): Observable<any>{
        return this.http.get<any>(this.url, {
        })
        .pipe(map(response => {
            return response;
        }));
    }

    getAllBooksLocal() {
        return JSON.parse(localStorage.getItem('catalogList'));
    }

    saveBookLocal(book: Book) {
        if(book.id === 0) {
            book.id = Math.floor(Math.random() * (1000 - 1));
        }
        const list = localStorage.getItem('catalogList');
        let local = list === null ? JSON.parse(`[${list}]`) : list;

        if (local[0] === null) {
            local[0] = book;
        }
        else {
            local = JSON.parse(local);
            local.push(book);
        }
        localStorage.setItem('catalogList', JSON.stringify(local));
        return JSON.parse('true');
    }

    updateBookPriceLocal(book: Book) {
        const list = JSON.parse(localStorage.getItem('catalogList'));

        const bookData = list.find((x: { id: number; }) => x.id === book.id);

        if (bookData) {
            bookData.pricerental = book.pricerental;
            localStorage.setItem('catalogList', JSON.stringify(list));
        }
    }

    // return this.http.get<any>(environment.CATALOGO, {
    // }).pipe(map(response => {
    //     return response;
    // }))

    listarLibro(): Observable<any>{
      let token = localStorage.getItem('token');
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      });
      return this.http.get<any>(environment.LISTAR_ADMIN,{headers: header}).pipe(map(response => {
        return response;
      }))
    }

    crearLibro(titulo: string, autor: number, descripcion: string, categoriaid: number, precioventa:number,
      preciorenta: number, stockventa:number, stockrenta: number): Observable<any>{
      let codlibfisa = Math.floor((Math.random() * (999999-100000))+100000);
      let codlibfisv = Math.floor((Math.random() * (999999-100000))+100000);
      let token = localStorage.getItem('token');
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
      });
      let body = {
        'autor': {
          'idautor': autor
        },
        'categoria': {
          'idcategoria': categoriaid
        },
        'costoalquiler': preciorenta,
        'costoventa': precioventa,
        'descripcion': descripcion,
        'estado': '1',
        'librosfisicos' : [
          {
            'codlibfis': codlibfisa.toString(),
            'estado': '1',
            'tipo': 'A'
          },
          {
            'codlibfis': codlibfisv.toString(),
            'estado': '1',
            'tipo': 'V'
          }
        ],
        'nombre': titulo,
        'stockalquiler': stockrenta,
        'stockventa': stockventa,
        'tipo': 'f'
      };

      return this.http.post<any>(environment.CREARLIBRO,body,{headers: header});
    }

    actualizarLibro(titulo: string, autor: number, descripcion: string, categoriaid: number, precioventa:number,
      preciorenta: number, stockventa:number, stockrenta: number, idlibro: number){

      let codlibfisa = Math.floor((Math.random() * (999999-100000))+100000);
      let codlibfisv = Math.floor((Math.random() * (999999-100000))+100000);
      let token = localStorage.getItem('token');
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      });
      let body = {
        "autor": {
          "idautor": autor
        },
        "categoria": {
          "idcategoria":categoriaid
        },
        "costoalquiler": preciorenta,
        "costoventa": precioventa,
        "idlibro":  idlibro,
        "descripcion": descripcion,
        "estado": "1",
        "librosfisicos": [
          {
            "idlibro": 1,
            "codlibfis": codlibfisa.toString(),
            "estado": "1",
            "tipo": "A"
          },
          {
            "idlibro": 1,
            "codlibfis": codlibfisv.toString(),
            "estado": "1",
            "tipo": "V"
          }
        ],
        "nombre": titulo,
        "stockalquiler": stockrenta,
        "stockventa": stockventa,
        "tipo": "f"
      }
      return this.http.post<any>(environment.ACTUALIZARLIBRO,body,{headers:header});
    }
}
