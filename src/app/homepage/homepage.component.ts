import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  name = "";
  adresse = "";
  email = "";
  dateNaiss = "";
  phone = "";
  constructor(public service: CandidatService) { }

  ngOnInit(): void {
  }

}
