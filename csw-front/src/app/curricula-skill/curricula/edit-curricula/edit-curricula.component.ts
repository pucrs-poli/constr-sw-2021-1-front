import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curricula } from '../../models/curricula.model';
import { CurriculaService } from '../../services/curricula.service';

@Component({
  selector: 'app-edit-curricula',
  templateUrl: './edit-curricula.component.html',
  styleUrls: ['./edit-curricula.component.css']
})
export class EditCurriculaComponent implements OnInit {
  curricula = {} as Curricula
  id: string

  constructor(
    private service: CurriculaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
  }

  get(id: string) {
    this.service.get(id).subscribe(
      data => {
        this.curricula = data
      }
    )
  }

  save() {
    this.service.patch(this.id, this.curricula).subscribe(
      () => {
        this.router.navigate(['/curricula', 'detail', this.id])
      }
    )
  }
}
