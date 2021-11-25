import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import { FilterSearchPipe } from './shared/pipes/FilterSearch/filter-search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule, 
    ReactiveFormsModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
