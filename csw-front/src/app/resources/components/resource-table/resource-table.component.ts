import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ResourceElement {
  id: string;
  description: string;
  name: string;
  type: string;
  actions: string;
}

const ELEMENT_DATA: ResourceElement[] = [
  {id: '60d90188eb3c5a3d9616ae21', description: 'Projetor branco de  2019', name: 'Projetor Epson PowerLite S41', type: 'PROJETOR', actions: 'Ações'},
  {id: '60d901bbeb3c5a3d9616ae22', description: 'Projetor preto de  2019', name: 'Projetor Epson PowerLite S41', type: 'PROJETOR', actions: 'Ações'},
];

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'type', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  readonly apiURL: string;

  handleClick(event: Event, item: ResourceElement) {
    alert(`Editar recurso com ID ${item.id}`);
  }

  handleRemove(event: Event, item: ResourceElement){
    alert(`Remover ID ${item.id}` );
  }

  constructor(private http: HttpClient) {
    this.apiURL = 'http://ec2-54-232-199-57.sa-east-1.compute.amazonaws.com';
  }



  // Getting CORS error from API
  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/resources`)
           .subscribe((result: any) => console.log(result));
  }

}
