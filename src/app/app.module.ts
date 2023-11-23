import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//IMPORTAMOS LAS CLASES PARA TRABAJAR CON FIRESTOR
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//IMPORTAMOS LA CONFIGURACION DE FIREBASE
import { environment } from 'src/environments/environment';
import { PostService } from './services/service.cine';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    //Iiniciarlizar la app con firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
