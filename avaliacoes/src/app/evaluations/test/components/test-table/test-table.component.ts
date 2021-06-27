import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { TestModel } from 'src/app/evaluations/models/test.model';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
];

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  
  @Input() tests: TestModel[];

  displayedColumns: string[] = ['position', 'name'];
  dataSource: PeriodicElement[];

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
  }
}
