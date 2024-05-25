import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'aboutus', component: AboutusComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'our-products', component: ProductsComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'product-selector', component: ProductSelectorComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'gallery', component: GalleryComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'downloads', component: DownloadsComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'contact-us', component: ContactUsComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'register', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'details/:id', component: DetailsComponent, canActivate:[AuthGuardService],
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
