import { TeamsService } from './../../services/teams.service';
import { Component, inject, Input } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { ITeam } from '../../interface/team.interface';
import { SelectCategoryComponent } from "./select-category/select-category.component";

@Component({
  selector: 'app-team-list',
  imports: [TeamCardComponent, SelectCategoryComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  arrTeams: ITeam[] = [];
  teamsService = inject(TeamsService);
  @Input() category: string = "";

  async ngOnInit() {

    try {
      let response: ITeam[] = await this.teamsService.getAll();
      this.arrTeams = response;
      console.log(this.arrTeams);
    }

    catch (err) {
      console.log(err);

    }
  }

  ngOnChanges() {

    console.log()

  }
}

