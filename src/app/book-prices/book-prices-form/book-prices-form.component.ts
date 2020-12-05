import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/libro.module';
import { CatalogoServices } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-book-prices-form',
  templateUrl: './book-prices-form.component.html',
  styleUrls: ['./book-prices-form.component.css']
})
export class BookPricesFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private catalogoServices: CatalogoServices,
    public dialogRef: MatDialogRef<BookPricesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) { }

  ngOnInit(): void {
    this.buildForm();
    if (this.data != null) {
      this.form.controls['id'].setValue(this.data.id);
      this.form.controls['pricerental'].setValue(this.data.pricerental);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [''],
      pricerental: ['']
    });
  }

  close() {
    this.form.reset();
    this.dialogRef.close();
  }

  updatePriceRental(event: Event) {
    event.preventDefault();

    if (this.form.valid){
      const book = this.form.value;
      this.catalogoServices.updateBookPriceLocal(book);
      this.dialogRef.close(true);
    }
  }

  clear() {
    this.form.reset();
  }
}
