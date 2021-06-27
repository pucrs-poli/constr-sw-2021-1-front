import { Component, OnInit } from '@angular/core';

export interface ResourceElement {
  id: string;
  description: string;
  name: string;
  type: string;
}

const ELEMENT_DATA: ResourceElement[] = [
  {id: 'dmdm', description: 'Hydrogen', name: 'llallal', type: 'H'},
  {id: 'dmdm', description: 'Hydrogen', name: 'llallal', type: 'H'},
];

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'type'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
