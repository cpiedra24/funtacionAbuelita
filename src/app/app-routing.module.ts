//Rutas: Se procede a hacer los imports del nuevo componente que agregaste, se agrega en rutas 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from 'src/app/video/video.component';
//import { AppComponent } from 'src/app/app.component';
import { InfoComponent } from 'src/app/info/info.component';
import { ProyectosComponent } from 'src/app/proyectos/proyectos.component';
import { InicioComponent } from 'src/app/inicio/inicio.component';

//la constante routes va a ser las rutas que usaras.
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'videos', component: VideoComponent },// path es el nombre al que usaras para llamar esta ruta.
  { path: 'info', component: InfoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'inicio', component: InicioComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)//se immporta las rutas
  ],
  exports: [RouterModule],//al final las exportamos
  declarations: []
})
export class AppRoutingModule { }
