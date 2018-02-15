import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  numbers = {
    restgaeld: 746473.85764,
    hovedstol: 64736.78676459
  }

  name =  "har-du-aldrig-set-mig-nøgen";

}
