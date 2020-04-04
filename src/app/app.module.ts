import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item.component';
import { ReserveButtonComponent } from './list/reserve-button.component';
import { CancelButtonComponent } from './list/cancel-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ReserveButtonComponent,
    CancelButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
