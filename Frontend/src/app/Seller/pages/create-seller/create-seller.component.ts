import { Component,} from '@angular/core';

import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';


import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent {
  
  Languages: Array<any> = [
    { name: 'Spanish', value: 'Spanish' },
    { name: 'English', value: 'English' },
  ];
  spanish = false;
  english = false;
  validateForm!: FormGroup;



  constructor(private fb: FormBuilder, private Services:ServicesService) {
    this.validateForm = this.fb.group({
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

  onCheckboxChange(e:any) {
    const language: FormArray = this.validateForm.get('language') as FormArray;
  
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
    this.Services.createEmployees(this.validateForm.value).subscribe(
      res=>{
        this.validateForm.reset()
      },
      err=>console.error(err)
    )
  }
}
