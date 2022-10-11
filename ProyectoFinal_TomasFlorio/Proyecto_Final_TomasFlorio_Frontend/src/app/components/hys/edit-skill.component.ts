import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(private skillS: SkillService, private activateRouter: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(data => {
      this.skill = data
    },
      err => {
        alert("Error al modificar");
        this.route.navigate(['']);
      })
  }

  onUpdate() {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        this.route.navigate(['']);
      }, err => {
        alert("Error al modificar la skill")
      })
  }

}
