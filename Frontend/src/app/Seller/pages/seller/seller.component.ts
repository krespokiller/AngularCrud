import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/interfaces/Seller.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  _id!:"";
  editar = false;
  mostrar = false;
  spanish = false;
  english = false;
  employee!:Seller;
  validateForm!: FormGroup;
  EditForm!: FormGroup;
  Languages: Array<any> = [
    { name: 'Spanish', value: 'Spanish' },
    { name: 'English', value: 'English' },
  ];

  constructor(private fb: FormBuilder,private services:ServicesService) {
    //formulario para buscar por la id
    this.validateForm = this.fb.group({
      _id: [null, [Validators.required]],
    });
    //formulario para editar
    this.EditForm = this.fb.group({
      role: [null, [Validators.required]],
      language: this.fb.array([]),
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      currency: this.fb.group({
        code: [null, [Validators.required]],
        name: [null, [Validators.required]],
        symbol: [null, [Validators.required]]
      }),
      country: [null, [Validators.required]],
      countryCode: ['+57'],
      countryCodeName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  Obteneremployee() {
    this._id=this.validateForm.value._id
      this.services.GetEmployee(this._id).subscribe(
        res=>{
          this.employee=res
          this.mostrar=true
        },
        err=>console.error(`No existe esa id en la base de datos\n${err}`)
        )
  }
  editaremployee(){
    this.services.EditEmployee(this._id,this.EditForm.value).subscribe(
      res=>{
        this.editar=false
        this.EditForm.reset();
        this.Obteneremployee()
      },
      err=>console.error(err)
    )
  }
  cambiar(){
    this.editar=true
    this.mostrar=false
  }

  deleteemployee(){
    const sure = confirm('desea eliminar el dato?') ;
    (sure===true)
    ? this.services.DeleteEmployees(this._id).subscribe(
      res=>{
          this.mostrar = false
          this.editar = false
          this.resetForm()
          },
      err=>console.error(err)
    )
    :console.log("bien pensado")
  }

  onCheckboxChange(e:any) {
    const language: FormArray = this.EditForm.get('language') as FormArray;
  
    if (e.target.checked) {
      language.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      language.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          language.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    this.services.createEmployees(this.validateForm.value).subscribe(
      res=>this.validateForm.reset(),
      err=>console.error(err)
    )
  }
}
