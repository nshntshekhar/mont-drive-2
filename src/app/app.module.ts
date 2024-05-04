import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './details/details.component';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyDixseK5-p5gD-5Hxx2Uz8KIEXPSLQcymk",
  authDomain: "montdrive-6897b.firebaseapp.com",
  projectId: "montdrive-6897b",
  storageBucket: "montdrive-6897b.appspot.com",
  messagingSenderId: "291559194940",
  appId: "1:291559194940:web:3e3c28fc121d8206605e39"
};


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    DownloadsComponent,
    GalleryComponent,
    ProductSelectorComponent,
    ProductsComponent,  
    HeaderComponent,
    DetailsComponent,
    SignupComponent,
    LoginComponent,
    
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
