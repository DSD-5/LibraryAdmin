import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/libro.module';
import { CatalogoServices } from 'src/app/services/catalogo.service';
import { Constants } from 'src/app/utils/constants';
import { NotificationService } from 'src/app/services/notification.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  idlibro : number;
  form: FormGroup;
  requiredField = Constants.requiredField;
  successMessage = Constants.successMessage;
  onlyNumbers = Constants.onlyNumbers;
  stock = 0;
  imageUrl = '../../../assets/image/default.jpg';
  fileToUpload: File = null;

  constructor(
    private formBuilder: FormBuilder,
    private catalogoServices: CatalogoServices,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<BookFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    // this.catalogoServices.crearLibro().subscribe(map(response => {
    //   console.log(response)
    //   },
    //   error => {
    //     console.log(error)
    //   }))

    console.log(this.data);

    this.buildForm();
    if (this.data != null) {
      this.idlibro = this.data.idlibro;
      let autor = this.data.autor.idautor;
      let categoria = this.data.categoria.idcategoria;
      let state = this.data.estado;
      this.form.controls['title'].setValue(this.data.nombre);
      this.form.controls['autor'].setValue(autor.toString());
      this.form.controls['description'].setValue(this.data.descripcion);
      this.form.controls['genderId'].setValue(categoria.toString());
      this.form.controls['state'].setValue(state.toString());
      this.form.controls['stockrenta'].setValue(this.data.stockalquiler);
      this.form.controls['stockventa'].setValue(this.data.stockventa);
      this.form.controls['preciorenta'].setValue(this.data.costoalquiler);
      this.form.controls['precioventa'].setValue(this.data.costoventa);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: [ Validators.required],
      autor: [Validators.required],
      description: [ Validators.required],
      genderId: [Validators.required],
      state: [Validators.required],
      stockrenta: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      stockventa:  [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      preciorenta:  [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      precioventa: [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
    });
  }

  get f() { return this.form.controls; }

  close() {
    this.form.reset();
    this.dialogRef.close();
  }

  saveBook(event: Event) {

    let titulo = this.f.title.value;
    let autor = this.f.autor.value;
    let descripcion = this.f.description.value;
    let genero = this.f.genderId.value;
    let precioventa = this.f.precioventa.value;
    let preciorenta = this.f.preciorenta.value;
    let stockventa = this.f.precioventa.value;
    let stockrenta = this.f.preciorenta.value;

    if(this.data.tipo == 'edit'){
        this.catalogoServices.actualizarLibro(titulo.toString(), Number(autor), descripcion.toString(),
        Number(genero), Number(precioventa), Number(preciorenta), Number(stockventa),
        Number(stockrenta), Number(this.idlibro)).subscribe(response => {
        console.log(response);
        location.reload();
        // location.reload()
      },
      error => {
        console.log(error);
      })
    }
    else {
      this.catalogoServices.crearLibro(titulo.toString(), Number(autor), descripcion.toString(), Number(genero),
      Number(precioventa), Number(preciorenta), Number(stockventa), Number(stockrenta)).subscribe(response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      })
    }
  }

  clear() {
    this.form.reset();
  }

  // uploadFile(file: FileList) {
  //   this.fileToUpload = file.item(0);
  //   const reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //   };
  //   reader.readAsDataURL(this.fileToUpload);
  // }
}
