import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  name = "";
  adresse = "";
  email = "";
  dateNaiss = new Date()
  phone = ""
  constructor() { }

  ngOnInit(): void {
  }

}
