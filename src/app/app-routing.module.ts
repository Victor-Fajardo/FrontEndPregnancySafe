import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components:
import { HomepageComponent } from './pages/homepage/homepage.component';
import {HomemotherComponent} from './pages/homemother/homemother.component';
import {HomeobstetricianComponent} from './pages/homeobstetrician/homeobstetrician.component';
import { HomeadviceComponent } from './pages/homeadvice/homeadvice.component';
import {CreateMotherComponent} from './pages/mother/create-mother/create-mother.component';
import {ListMotherComponent} from './pages/mother/list-mother/list-mother.component';
import { CreatePregnancyStageComponent } from './pages/PregnancyStage/create-pregnancy-stage/create-pregnancy-stage.component';
import { CreateObstetricianComponent } from './pages/obstetrician/create-obstetrician/create-obstetrician.component';
import { CreateMedicalExamComponent } from './pages/MedicalExam/create-medical-exam/create-medical-exam.component';
import { ListObstetricianComponent } from './pages/obstetrician/list-obstetrician/list-obstetrician.component';
import { ListPregnancyStageComponent } from './pages/PregnancyStage/list-pregnancy-stage/list-pregnancy-stage.component';
import { ListMedicalExamComponent } from './pages/MedicalExam/list-medical-exam/list-medical-exam.component';
import { CreateMedicalAppointmentComponent } from './pages/MedicalAppointment/create-medical-appointment/create-medical-appointment.component';
import { ListMedicalAppointmentComponent } from './pages/MedicalAppointment/list-medical-appointment/list-medical-appointment.component';
import { CreateVideoComponent } from './pages/Video/create-video/create-video.component';
import { ListVideoComponent } from './pages/Video/list-video/list-video.component';
import { CreateMessageComponent } from './pages/Message/create-message/create-message.component';
import { ListMessageComponent } from './pages/Message/list-message/list-message.component';
import { ListAdviceComponent } from './pages/Advice/list-advice/list-advice.component';
import { CreateAdviceComponent } from './pages/Advice/create-advice/create-advice.component';

const routes: Routes = [
  { path: '',   redirectTo: '/PregnancySafe', pathMatch: 'full' },
  { path: 'PregnancySafe', component: HomepageComponent },
  { path: 'PregnancySafe/homemother', component: HomemotherComponent },
  { path: 'PregnancySafe/homemother/mother-create', component: CreateMotherComponent },
  { path: 'PregnancySafe/homemother/mother-list', component: ListMotherComponent },
  { path: 'PregnancySafe/homemother/stage-create', component: CreatePregnancyStageComponent },
  { path: 'PregnancySafe/homemother/stage-list', component: ListPregnancyStageComponent },
  { path: 'PregnancySafe/homemother/MedicalExam-list', component: ListMedicalExamComponent },
  { path: 'PregnancySafe/homemother/MedicalAppoint-list', component: ListMedicalAppointmentComponent },
  { path: 'PregnancySafe/homemother/message-list', component: ListMessageComponent },
  { path: 'PregnancySafe/homemother/message-create', component: CreateMessageComponent },
  { path: 'PregnancySafe/homeobstetrician', component: HomeobstetricianComponent },
  { path: 'PregnancySafe/homeobstetrician/obstetrician-create', component: CreateObstetricianComponent },
  { path: 'PregnancySafe/homeobstetrician/obstetrician-list', component: ListObstetricianComponent },
  { path: 'PregnancySafe/homeobstetrician/MedicalExam-create', component: CreateMedicalExamComponent },
  { path: 'PregnancySafe/homeobstetrician/MedicalExam-list', component: ListMedicalExamComponent },
  { path: 'PregnancySafe/homeobstetrician/MedicalAppoint-create', component: CreateMedicalAppointmentComponent },
  { path: 'PregnancySafe/homeobstetrician/MedicalAppoint-list', component: ListMedicalAppointmentComponent },
  { path: 'PregnancySafe/homeadvice', component: HomeadviceComponent },
  { path: 'PregnancySafe/homeadvice/advice-create', component: CreateAdviceComponent },
  { path: 'PregnancySafe/homeadvice/advice-list', component: ListAdviceComponent },
  { path: 'PregnancySafe/homeadvice/video-create', component: CreateVideoComponent },
  { path: 'PregnancySafe/homeadvice/video-list', component: ListVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
