import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DisciplinasTableDataSource, DisciplinasTableItem } from './disciplinas-table-datasource';
import { Router } from '@angular/router';
import { TestModel } from 'src/app/evaluations/models/test.model';

@Component({
  selector: 'app-disciplinas-table',
  templateUrl: './disciplinas-table.component.html',
  styleUrls: ['./disciplinas-table.component.css']
})
export class DisciplinasTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DisciplinasTableItem>;
  dataSource: DisciplinasTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'numberTests'];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.dataSource = new DisciplinasTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClickItem(item) {
    this.router.navigateByUrl("/test", { state: { test: item } })
  }
}
