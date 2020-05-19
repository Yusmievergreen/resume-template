import { Component, OnInit } from '@angular/core'
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  visibleSidebar1: any
  faTwitter = faTwitter
  faGithub = faGithub
  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faCode = faCode
  faPalette = faPalette
  data: any
  value: [50, 60]
  options: any = {
    title: {
      display: true
    },
    legend: {
      display: false
    },
    tooltip: {
      enable: false
    }
  }
  constructor() {
    this.data = {
      datasets: [
        {
          data: [100, 25],
          backgroundColor: ['#7b84db', '#1362a6'],
          borderColor: ['#7b84db', '#1362a6']
        }
      ]
    }
  }

  ngOnInit() {}
}
