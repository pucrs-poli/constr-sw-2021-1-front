import { QuestionModel } from "./question.model";

export class TestModel{
    id?: string
    subjects?: string[];
    weight?: number;
    duration?: number;
    questions?: QuestionModel[];
}