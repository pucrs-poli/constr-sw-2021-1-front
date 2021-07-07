import { Component, OnInit } from '@angular/core';
import { Curricula } from '../../models/curricula.model';
import { CurriculaService } from '../../services/curricula.service';

@Component({
  selector: 'app-curricula-list',
  templateUrl: './curricula-list.component.html',
  styleUrls: ['./curricula-list.component.css']
})
export class CurriculaListComponent implements OnInit {
  curriculas = [] as Curricula[]

  constructor(
    private service: CurriculaService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(
      data => {
        this.curriculas = data
      }
    )
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      () => {
        this.getAll()
      }
    )
  }
}
