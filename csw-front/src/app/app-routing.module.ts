import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

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
        path: 'home',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
