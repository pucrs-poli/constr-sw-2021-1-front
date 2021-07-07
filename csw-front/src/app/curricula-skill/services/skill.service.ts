import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';
import { ApiService } from './api.service';

@Injectable()
export class SkillService {
  readonly path = 'skill';

  constructor(private api: ApiService) { }

  getAll(): Observable<Skill[]> {
    return this.api.get(this.path)
  }

  get(id: string): Observable<Skill> {
    return this.api.get(`${this.path}/${id}`)
  }

  post(skill: Skill): Observable<Skill> {
    return this.api.post(this.path, skill)
  }

  patch(id: string, skill: Skill): Observable<Skill> {
    return this.api.patch(`${this.path}/${id}`, skill)
  }

  delete(id: string): Observable<Skill> {
    return this.api.delete(`${this.path}/${id}`)
  }
}
