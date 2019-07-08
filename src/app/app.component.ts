import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeTribe Employee List';

  employees = [
    {pic:"/assets/1.jpeg", name:"Sikandar", position:"Programmer"},
    {pic:"/assets/2.jpg", name:"Alex", position:"Designer"},
    {pic:"/assets/3.jpg", name:"Maria", position:"Manager"}
  ];

  model:any={};
  model2:any={};
  msg:any="";
  
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... "; 

  }

  
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }

  
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}
