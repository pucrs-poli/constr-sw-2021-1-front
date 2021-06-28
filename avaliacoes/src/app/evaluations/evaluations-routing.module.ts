import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestsComponent } from "./tests/tests.component";
import { TestComponent } from "./test/test.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
    {
        path: '',
        component: TestsComponent,
    },
    {
        path: 'test',
        component: TestComponent,
    },
    {
        path: 'results',
        component: ResultsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluationsRoutingModule{}