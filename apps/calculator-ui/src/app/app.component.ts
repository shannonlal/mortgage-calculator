import { Component } from '@angular/core'
import * as Term from '@mortgage-calculator/models'

console.log('try', Term)
@Component({
  selector: 'mortgage-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator-ui'
}
