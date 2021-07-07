import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { CurriculaService } from './services/curricula.service';
import { SkillService } from './services/skill.service';
import { CurriculaListComponent } from './curricula/curricula-list/curricula-list.component';
import { CurriculaDetailComponent } from './curricula/curricula-detail/curricula-detail.component';
import { CreateCurriculaComponent } from './curricula/create-curricula/create-curricula.component';
import { EditCurriculaComponent } from './curricula/edit-curricula/edit-curricula.component';
import { SkillDetailComponent } from './skill/skill-detail/skill-detail.component';
import { EditSkillComponent } from './skill/edit-skill/edit-skill.component';
import { CreateSkillComponent } from './skill/create-skill/create-skill.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurriculaSkillRoutingModule } from './curricula-skill-routing.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    CurriculaListComponent,
    CurriculaDetailComponent,
    CreateCurriculaComponent,
    EditCurriculaComponent,
    SkillDetailComponent,
    EditSkillComponent,
    CreateSkillComponent
  ],
  imports: [
    CommonModule,
    CurriculaSkillRoutingModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    CurriculaService,
    SkillService
  ]
})
export class CurriculaSkillModule { }
