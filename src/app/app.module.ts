import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { VideoComponent } from './video/video.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    InfoComponent,
    VideoComponent,
    InicioComponent,
    ProyectosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
