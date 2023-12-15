import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photos/photo/photo.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'photos/:id', component: PhotoComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: AppComponent }

    // { path: 'home', component: app }, 
    // { path: 'test/:id', component: BComponent }, 
    // { path: 'testy', component: CComponent, data: { key: 'ABC' } }, 
    // { path: '', redirectTo: '/testy', pathMatch: 'full' }, 
    // { path: '**', component: PageNotFoundComponent } 
   
];
