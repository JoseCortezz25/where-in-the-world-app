import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './home/components/country-detail/country-detail.component';
import { LayoutComponent } from './layout/layout.component';

// import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // redirectTo: '/',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)    
      },
      {
        path:'country/:name',
        component: CountryDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
