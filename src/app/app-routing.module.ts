import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PeopleComponent } from './people/people.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', component: ListComponent, children :[
      { path: 'favourites', component: FavouritesComponent },
      { path: '', component: PeopleComponent },
      { path: 'details', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
