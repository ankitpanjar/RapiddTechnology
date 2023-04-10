import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  getValue:any=[];
  gettime:any=[];
  dates = {
    date1: new Date('2023-04-01'),
    date2: new Date()
  };
  constructor(private http:HttpClient){

  }
  ngOnInit():void{
    this.getData();
    // this.calculateDiff(StarTimeUtc:any,EndTimeUtc);
  }
  public getData(){
    const url ='https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=='
    this.http.get(url).subscribe((data)=>{
      console.log(data) // for checking the data in console window
      
      this.getValue=data; // for checking the data in web page :store the data 
    })
    
  }
  calculateSum(): Date {
    const date1 = this.dates.date1.getTime();
    const date2 = this.dates.date2.getTime();
    const sum = date1 - date2;
    return new Date(sum);
  } 

}


