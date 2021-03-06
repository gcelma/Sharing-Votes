import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Module

import { MaterialModule } from './modules/material';

import { EntityService } from './services/entity.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Components
// Layout

import { AppGridComponent } from './components/layout/app-grid/app-grid.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-menu/top-menu.component';
import { TopTitleComponent } from './components/layout/top-title/top-title.component';


// Dinamic Components

import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';

import { NgxPaginationModule } from 'ngx-pagination';

// app_routes

import { AppRoutingModule } from './routes/app.routes';

// Toaster

import { ToastrModule } from 'ngx-toastr';

import { CreateEventComponent } from './components/profile/entity/create-event/create-event.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { CargaComponent } from './components/carga/carga.component';
import { LoadImageService } from './services/load-image.service';
import { environment } from '../environments/environment';
import { PicturesComponent } from './components/profile/pictures/pictures.component';
import { EntityRegisterComponent } from './components/entity-register/entity-register.component';
import { EventsComponent } from './components/profile/entity/events/events.component';
import { EventComponent } from './components/profile/entity/events/event/event.component';
import { PollComponent } from './components/profile/entity/events/event/polls/poll/poll.component';
import { PollsComponent } from './components/profile/entity/events/event/polls/polls.component';
import { CreatePollComponent } from './components/profile/entity/events/event/create-poll/create-poll.component';
import { QuestionsComponent } from './components/profile/entity/events/event/polls/poll/questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AppGridComponent,
    TopMenuComponent,
    TopTitleComponent,
    AppWelcomeComponent,
    CreateEventComponent,
    ProfileComponent,
    PicturesComponent,
    CargaComponent,
    EntityRegisterComponent,
    EventsComponent,
    EventComponent,
    PollComponent,
    PollsComponent,
    CreatePollComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AuthService, LoadImageService, EntityService],
  bootstrap: [AppComponent]
})

export class AppModule { }
