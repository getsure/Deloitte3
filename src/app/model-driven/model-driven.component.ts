import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  userForm = this.formBuilder.group({
     userName:['', [Validators.required, Validators.pattern('')]],
     email:['', [Validators.required, Validators.pattern('')]],
     address:this.formBuilder.group({
      addressCity:['', [Validators.required, Validators.pattern('')]]
     })
  })

  sendData(){
    console.log(this.userForm.value)
  }

}
