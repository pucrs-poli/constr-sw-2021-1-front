import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  readonly apiURL : string;

  constructor(private http: HttpClient) {
    this.apiURL = 'http://ec2-54-232-199-57.sa-east-1.compute.amazonaws.com';
  }

  // Getting CORS error from API
  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/resources`)
           .subscribe((result: any) => console.log(result));
  }

}
