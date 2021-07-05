import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResultModel } from '../models/result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: ResultModel[];
  name: string;

  constructor(protected router: Router) {
    this.name = this.router.getCurrentNavigation().extras.state.name;
    this.results = this.router.getCurrentNavigation().extras.state.results;
  }

  ngOnInit(): void {
  }

}
