import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpComponent } from './http/http.component';
import { CommunicationComponent } from './communication/communication.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { WorkComponent } from './work/work.component';
import { HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'searchbar',
    component: SearchbarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HttpComponent,
    CommunicationComponent,
    EntertainmentComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    /*RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
