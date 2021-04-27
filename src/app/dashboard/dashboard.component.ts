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

  constructor() {}

  ngOnInit() {}
}
