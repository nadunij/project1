import { Skill } from "./skill";

export class Employee {
    id: number;
    employee_name: String;
    employee_dob: Date;
    email: String;
    skill: Skill[];
    // skills: Array<String>;
    // skills: String[];
}