import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
enb=true;
name:string="";
val="Hello";
  enable(){
  this.enb=false;
}
oninput(event){
  let s=event.value;
  console.log("Event value",s);
}
clear(){
  this.name='';
}

}
