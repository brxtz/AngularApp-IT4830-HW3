import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFileComponent } from './post-file/post-file.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'add', component: PostFileComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
