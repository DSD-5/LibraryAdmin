import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from 'src/app/utils/constants';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  requiredField = Constants.requiredField;
  successMessage = Constants.successMessage;
  emailValid = Constants.emailValid;
  onlyNumbers = Constants.onlyNumbers;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
    this.buildForm();
    if (this.data != null) {
      this.form.setValue(this.data);
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [0],
      user: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoDocumentoId: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      departamentoId: [''],
      provinciaId: [''],
      distritoId: ['']
    });
  }

  close() {
    this.form.reset();
    this.dialogRef.close();
  }

  saveUser(event: Event) {
  }

  clear() {
    this.form.reset();
  }
}
