import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomemotherComponent } from './pages/homemother/homemother.component';
import { HomeobstetricianComponent } from './pages/homeobstetrician/homeobstetrician.component';
import { HomeadviceComponent } from './pages/homeadvice/homeadvice.component';
import { CreateMotherComponent } from './pages/mother/create-mother/create-mother.component';
import { ListMotherComponent } from './pages/mother/list-mother/list-mother.component';
import { CreatePregnancyStageComponent } from './pages/PregnancyStage/create-pregnancy-stage/create-pregnancy-stage.component';
import { ListPregnancyStageComponent } from './pages/PregnancyStage/list-pregnancy-stage/list-pregnancy-stage.component';
import { ListObstetricianComponent } from './pages/obstetrician/list-obstetrician/list-obstetrician.component';
import { CreateObstetricianComponent } from './pages/obstetrician/create-obstetrician/create-obstetrician.component';
import { CreateMedicalExamComponent } from './pages/MedicalExam/create-medical-exam/create-medical-exam.component';
import { ListMedicalExamComponent } from './pages/MedicalExam/list-medical-exam/list-medical-exam.component';
import { CreateMedicalAppointmentComponent } from './pages/MedicalAppointment/create-medical-appointment/create-medical-appointment.component';
import { ListMedicalAppointmentComponent } from './pages/MedicalAppointment/list-medical-appointment/list-medical-appointment.component';
import { CreateVideoComponent } from './pages/Video/create-video/create-video.component';
import { ListVideoComponent } from './pages/Video/list-video/list-video.component';
import { CreateMessageComponent } from './pages/Message/create-message/create-message.component';
import { ListMessageComponent } from './pages/Message/list-message/list-message.component';
import { ListAdviceComponent } from './pages/Advice/list-advice/list-advice.component';
import { CreateAdviceComponent } from './pages/Advice/create-advice/create-advice.component';


@NgModule({

  declarations: [
    AppComponent,
    HomepageComponent,
    HomemotherComponent,
    HomeobstetricianComponent,
    HomeadviceComponent,
    CreateMotherComponent,
    ListMotherComponent,
    CreatePregnancyStageComponent,
    ListPregnancyStageComponent,
    ListObstetricianComponent,
    CreateObstetricianComponent,
    CreateMedicalExamComponent,
    ListMedicalExamComponent,
    CreateMedicalAppointmentComponent,
    ListMedicalAppointmentComponent,
    CreateVideoComponent,
    ListVideoComponent,
    CreateMessageComponent,
    ListMessageComponent,
    ListAdviceComponent,
    CreateAdviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
