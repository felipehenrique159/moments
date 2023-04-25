import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from 'src/app/services/moment/moment.service';
import { Moment } from 'src/app/interfaces/Moments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  allMoments: Moment[] = []
  moments: Moment[] = []

  baseUrl = 'http://localhost:3333'

  faSearch = faSearch
  searchTerm: string = ''

  constructor(
    private momentService: MomentService
  ) {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allMoments = data
      this.moments = data
    })
  }

  search(event: Event){
   const target = event.target as HTMLInputElement
   const value = target.value

   this.moments = this.allMoments.filter(moment => {
     return moment.title.toLowerCase().includes(value)
   })
  }

}
