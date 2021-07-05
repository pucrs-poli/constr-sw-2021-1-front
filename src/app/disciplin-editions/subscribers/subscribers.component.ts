import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribersModel } from 'src/app/disciplin-editions/models/subscribers.model';
import { SubscribersService } from '../services/subscribers.service';

const ELEMENT_DATA: SubscribersModel[] = [
  {id: "P32", student_id: 1234, sub_date: "28/07/2019", active: true},
  {id: "P32", student_id: 4132, sub_date: "28/07/2019", active: true},
  {id: "P32", student_id: 4289, sub_date: "29/07/2019", active: true},
  {id: "P32", student_id: 4930, sub_date: "29/07/2019" ,active: true},
  {id: "P32", student_id: 5837, sub_date: "30/07/2019" ,active: true},
  {id: "P32", student_id: 6389, sub_date: "31/07/2019", active: true},
  {id: "P32", student_id: 5739, sub_date: "01/08/2019", active: true},
  {id: "P32", student_id: 9876, sub_date: "01/08/2019", active: true},
  {id: "P32", student_id: 8429, sub_date: "01/08/2019", active: true},
  {id: "P32", student_id: 7846, sub_date: "01/08/2019", active: true},
];

@Component({
  selector: 'app-tests',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})

export class SubscribersComponent implements OnInit {
  dataSource: SubscribersModel[];

  constructor(protected evaluationService: SubscribersService, protected router: Router) { }

  ngOnInit() {
    // this.id = this.dataSource[1].id;
    // this.student_id = this.dataSource[1].student_id;
    // this.sub_date = this.dataSource[1].sub_date;
    // this.active = this.dataSource[1].active;

    this.dataSource = ELEMENT_DATA;
  }

  // onClickCreate() {
  //   this.router.navigateByUrl("/create");
  // }

  // onClickSubscribes(item){
  //   this.router.navigateByUrl(`/subscribers/${item}`, { state: { dataSource: this.dataSource, item: item } });
  // }

  // onClickEdit(item){
  //   const itemSelected = this.dataSource.find(i => i.id === item);
  //   this.router.navigateByUrl(`/edit/${item}`, { state: { dataSource: this.dataSource, item: itemSelected } });
  // }

  // onClickDelete(){ }
}

