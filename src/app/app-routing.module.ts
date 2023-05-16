import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { LoginComponent } from './componente/login/login.component';
import { NewExperienciaComponent } from './componente/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componente/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componente/educacion/neweducacion.component';
import { EditeducacionComponent } from './componente/educacion/editeducacion.component';
import { EditSkillComponent } from './componente/hys/edit-skill.component';
import { NewSkillComponent } from './componente/hys/new-skill.component';
import { EditAcercaDeComponent } from './componente/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editskill/:id', component: EditAcercaDeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }