import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {

  moment?: Moment
  baseUrl = 'http://localhost:3333'

  faEdit = faEdit
  faTimes = faTimes

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMoment(id).subscribe((moment) => (this.moment = moment.data))
  }

}
