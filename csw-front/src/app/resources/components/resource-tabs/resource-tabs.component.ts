import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-tabs',
  templateUrl: './resource-tabs.component.html',
  styleUrls: ['./resource-tabs.component.css']
})
export class ResourceTabsComponent implements OnInit {

  handleAdd(event: Event) {
    alert('Adicionar novo recurso');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
