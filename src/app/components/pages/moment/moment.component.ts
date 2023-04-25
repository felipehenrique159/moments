import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {

  moment?: Moment

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService.getMoment(id).subscribe((moment) => (this.moment = moment.data))
  }

}
