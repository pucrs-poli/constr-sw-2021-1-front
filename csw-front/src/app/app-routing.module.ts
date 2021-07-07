import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'evaluations',
        loadChildren: () => import('./evaluations/evaluations.module').then(m => m.EvaluationsModule),
    },
    {
        path: 'curricula',
        loadChildren: () => import('./curricula-skill/curricula-skill.module').then(m => m.CurriculaSkillModule),
    },
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),
    },
    {
      path: 'resources',
      loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
    },
    {
        path: 'lesson',
        loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule),
    },
    {
      path: 'buildings',
      loadChildren: () => import('./buildings/buildings.module').then((m) => m.BuildingsModule),
    },
    {
      path: 'home',
      component: HomeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
