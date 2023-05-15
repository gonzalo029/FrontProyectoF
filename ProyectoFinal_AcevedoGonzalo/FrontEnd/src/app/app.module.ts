import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { LogoapComponent } from './componente/logoap/logoap.component';
import { BannerComponent } from './componente/banner/banner.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componente/hys/hys.component';
import { ProyectoComponent } from './componente/proyecto/proyecto.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './componente/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componente/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componente/educacion/neweducacion.component';
import { EditeducacionComponent } from './componente/educacion/editeducacion.component';
import { EditSkillComponent } from './componente/hys/edit-skill.component';
import { NewSkillComponent } from './componente/hys/new-skill.component';
import { EditAcercaDeComponent } from './componente/acerca-de/edit-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
