import { Component, OnInit } from '@angular/core';

export interface Type {
  name: string;
  description: string;
}

const ELEMENT_DATA: Type[] = [
  { name: 'PROJETOR', description: 'Projetor da Epson' },
  { name: 'NOTEBOOK', description: 'Notebook' },
  { name: 'CANETA', description: 'Caneta para quadro branco' },
  { name: 'APAGADOR', description: 'Apagador para quadro branco' },
];
@Component({
  selector: 'app-add-resource-page',
  templateUrl: './add-resource-page.component.html',
  styleUrls: ['./add-resource-page.component.css']
})
export class AddResourcePageComponent implements OnInit {
  types = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
