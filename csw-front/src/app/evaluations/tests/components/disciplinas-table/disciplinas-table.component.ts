import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestModel } from 'src/app/evaluations/models/test.model';

@Component({
  selector: 'app-disciplinas-table',
  templateUrl: './disciplinas-table.component.html',
  styleUrls: ['./disciplinas-table.component.css']
})
export class DisciplinasTableComponent implements OnInit {
  @Input() tests: TestModel[];
  subjects: string[];
  tam: number;

  displayedColumns = ['name', 'numberTests'];

  constructor(protected router: Router,
  ) {}

  ngOnInit() {
    this.subjects = this.tests[1].subjects;
    this.tam = this.tests[1].subjects.length;
  }

  onClickItem(subject: string) {
    const tests = this.tests.filter( e => e.subjects.includes(subject));
    this.router.navigateByUrl("/test", { state: { test: tests, subject: subject } });
  }
}
