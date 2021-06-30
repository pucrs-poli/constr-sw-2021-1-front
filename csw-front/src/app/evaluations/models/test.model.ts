import { QuestionModel } from "./question.model";
import { ResultModel } from "./result.model";

export class TestModel{
    id?: string
    subjects?: string[];
    weight?: number;
    duration?: number;
    questions?: QuestionModel[];
    results?: ResultModel[];
}