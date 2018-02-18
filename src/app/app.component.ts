import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { TypingComponent } from '../../public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChildren('typ') components: QueryList<TypingComponent>;

  displayed:boolean = false;

  showMessage(message: string) {
    if(message)  {
      this.components.forEach(comp => comp.show(message));
      this.displayed = true;
    }
  }
}
