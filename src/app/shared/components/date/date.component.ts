import { Component } from '@angular/core'
import * as moment from 'moment'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
  public date = moment().format('YYYY-MM-DD')

  public get formattedDate() {
    return moment(this.date).format('dddd - DD MMMM YYYY')
  }

  public get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
}
