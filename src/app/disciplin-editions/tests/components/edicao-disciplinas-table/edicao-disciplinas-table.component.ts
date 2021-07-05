import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdicaoDisciplinaModel } from 'src/app/disciplin-editions/models/edicaoDisciplina.model';

@Component({
  selector: 'app-edicao-disciplinas-table',
  templateUrl: './edicao-disciplinas-table.component.html',
  styleUrls: ['./edicao-disciplinas-table.component.css']
})

export class EdicaoDisciplinaTableComponent implements OnInit {
  @Input() dataSource: EdicaoDisciplinaModel[];
  id: string;
  year: number;
  semester: string;
  subscribers: any[];
  active: boolean;
  displayedColumns: string[] =  ['id', 'year', 'semester','active', 'subscribes','Buttons'];

  constructor(public router: Router) {};

  ngOnInit() {
    this.id = this.dataSource[1].id;
    this.year = this.dataSource[1].year;
    this.semester = this.dataSource[1].semester;
    this.subscribers = this.dataSource[1].subscribers;
    this.active = this.dataSource[1].active;
  }

  onClickItem(item: string) {
    console.log({item});
    //const tests = this.dataSource.filter( e => e.subjects.includes(subject));
    //this.router.navigateByUrl("/test", { state: { test: tests, subject: subject } });
  }

  onClickSubscribes(item){
    this.router.navigateByUrl("/home", { state: { dataSource: this.dataSource, item: item } });
  }

  onClickEdit(item){
    const itemSelected = this.dataSource.find(i => i.id === item);
    this.router.navigateByUrl("/edit", { state: { dataSource: this.dataSource, item: itemSelected } });
  }

  onClickDelete(){ }
}
