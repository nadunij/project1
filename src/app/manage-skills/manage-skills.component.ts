import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from "rxjs";
import { MatTableDataSource } from '@angular/material';


import { Skill } from "../model/skill";
import { SkillService } from "../service/skill.service";

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.css']
})
export class ManageSkillsComponent implements OnInit {

//for viewing skills
displayedColumns: string[] = ['skill_id', 'skill_name', 'delete-button'];

skillInfoTabale: any;
  public dataSource = new MatTableDataSource(this.skillInfoTabale);

  skills: Observable<Skill[]>;
// ------------------------------------
  

//posting skills to the db

  skill: Skill = new Skill();

  form2: FormGroup;
  

  //validation
  skill_name = new FormControl("", [Validators.required, Validators.maxLength(50)]);


  constructor(fb: FormBuilder, private skillService: SkillService) { 
    this.form2 = fb.group({
      "skill_name": this.skill_name
      });
  }


  save() {
    this.skillService.createSkill(this.form2.value).subscribe(data => 
      console.log(data), 
      error => console.log(error)
      );
      this.getAllSkills();
    // console.log(this.skill);
    
  }



   onSubmit() {

    console.log("skill is submitted");
    // console.log(this.form2.value);
    this.save();
    // this.getAllSkills();
    this.form2.reset(); //input field clearing

}

//view skills
  ngOnInit() {
    this.getAllSkills();
  }

  getAllSkills(){
    this.skillService.getSkillsList().subscribe(data=>{
      console.log(data);
      this.skillInfoTabale=data;
      this.dataSource.data=this.skillInfoTabale;
    })
  }

  deleteSkill(skill_id: number){
    this.skillService.deleteSkill(skill_id).subscribe(data=>{
      console.log(data);
      this.getAllSkills();
  },
  error => console.log(error));
  }

}
