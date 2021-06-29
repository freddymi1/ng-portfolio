import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor() { }

  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new  FormControl('', [Validators.required, Validators.minLength(4)]),
    adress: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('1', Validators.required),
    birthDay: new FormControl('', Validators.required),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10)])
  })
}
