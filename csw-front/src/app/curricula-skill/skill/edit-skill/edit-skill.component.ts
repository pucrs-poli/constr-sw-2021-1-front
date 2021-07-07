import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../models/skill.model';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill = {} as Skill
  id: string

  constructor(
    private service: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.get(this.id)
  }

  get(id: string) {
    this.service.get(id).subscribe(
      data => {
        this.skill = data[0]
      }
    )
  }

  save() {
    this.service.patch(this.id, this.skill).subscribe(
      () => {
        this.router.navigate(['/curricula', 'skill', this.id])
      }
    )
  }
}
