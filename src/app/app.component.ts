import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  // 0 index start agum 
  // ['1','2','3'];=> index 0,1,2 but lenght 3
  // [{name:kesavan,age:12},{name:sai,age:23}]
  // [{schools:[{name:vivekandhta},{name:"little flower"}]}]
  // [{},[],]
  // [1,2,3,4]
  // ['1',34,"kokjdsfk"]
  formvalues: any[] = []

  // {name:'kesavan'},{name:'sai'}

  personform = this.formbuilder.group({
    id: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  })

  constructor(public formbuilder: FormBuilder) {

  }


  Register() {

    //    if(confirm("Are you sure delete?")){
    // console.log("Ok")



    //    }else{
    //     console.log("cancel")

    //    }

    console.log("Form Total value", this.formvalues)
    this.formvalues.push(this.personform.value);
    this.personform.reset()



  }







}
