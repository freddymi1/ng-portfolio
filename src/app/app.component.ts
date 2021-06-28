import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  notifications= 20;

  showSpinner = false;

  selectedValue:  string | undefined;

  color1="#0571af";

  opened = true;

  minDate = new Date();
  maxDate = new Date(2021, 7, 10)

  options: string[] = ['Angular', 'Angular material', 'React', 'Vue', 'Svelt'];

  objectOptions = [
    {name: "Angular"},
    {name: "Angular material"},
    {name: "Vue"},
    {name: "React"}
  ];

  myControl = new FormControl();
  filterOptions: Observable<string[]> | undefined;

  ngOnInit(){
    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(obj: any){
    return obj ? obj.name : undefined;
  }

  log(state: any){
    console.log(state)
  }

  logChange(index: any){
    console.log(index)
  }


  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    }, 5000)
  }
}
