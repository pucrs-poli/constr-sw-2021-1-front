import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curricula } from '../../models/curricula.model';
import { Skill } from '../../models/skill.model';
import { CurriculaService } from '../../services/curricula.service';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {
  skill = {} as Skill
  curricula = {} as Curricula
  curriculaId: string

  constructor(
    private service: SkillService,
    private curriculaService: CurriculaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.curriculaId = this.route.snapshot.paramMap.get('id')
    this.getCurricula(this.curriculaId)
  }

  getCurricula(id: string) {
    this.curriculaService.get(id).subscribe(
      data => {
        this.curricula = data
      }
    )
  }

  save() {
    this.skill.curriculumId = this.curriculaId
    this.service.post(this.skill).subscribe(
      data => {
        this.curricula.skills.push(data.id)
        this.curriculaService.patch(this.curriculaId, this.curricula).subscribe(
          () => {
            this.router.navigate(['/curricula', 'detail', this.curriculaId])
          }
        )
      }
    )
  }
}
