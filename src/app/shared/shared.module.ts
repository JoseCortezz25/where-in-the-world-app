import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// import { InfiniteScrollExampleComponent } from './components/infinite-scroll-example/infinite-scroll-example.component';



@NgModule({
  declarations: [
    HeaderComponent,
    // InfiniteScrollExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
