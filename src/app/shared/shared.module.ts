import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterSearchPipe } from './pipes/FilterSearch/filter-search.pipe';
// import { InfiniteScrollExampleComponent } from './components/infinite-scroll-example/infinite-scroll-example.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FilterSearchPipe,
    // InfiniteScrollExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    // FilterSearchPipe,
  ]
})

export class SharedModule { }
