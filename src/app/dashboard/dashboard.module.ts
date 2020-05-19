import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarModule } from 'primeng/sidebar'
import { DashboardComponent } from './dashboard.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ChartModule } from 'primeng/chart'
import { ProgressBarModule } from 'primeng/progressbar'

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SidebarModule, FontAwesomeModule, ChartModule, ProgressBarModule]
})
export class DashboardModule {}
