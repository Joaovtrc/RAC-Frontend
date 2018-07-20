import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RacService} from './services/rac-services.service'
//Components
import { TeacherQuestionsComponent } from './components/teacher/teacher-questions/teacher-questions.component';
import { TeacherMainComponent } from './components/teacher/teacher-main/teacher-main.component';
import { TeacherAnswersComponent } from './components/teacher/teacher-answers/teacher-answers.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { DialogGenericComponent } from './components/dialogs/dialog-generic/dialog-generic.component';
import { TeacherChatComponent } from './components/teacher/teacher-chat/teacher-chat.component';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';


const appRoutes: Routes = [
  //Routes
  { path: '',
    redirectTo: 'teacher',
    pathMatch: 'full'
  },
  {path: 'teacher', component: TeacherMainComponent, children: [
     {path: 'answers', component: TeacherAnswersComponent, outlet: 'teacher'},
     {path: 'questions', component: TeacherQuestionsComponent, outlet: 'teacher'},
     {path: 'dashboard', component: TeacherDashboardComponent, outlet: 'teacher'},
     {path: 'chat', component: TeacherChatComponent, outlet: 'teacher'},
    ]

    },
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherQuestionsComponent,
    TeacherMainComponent,
    TeacherAnswersComponent,
    TeacherDashboardComponent,
    DialogGenericComponent,
    TeacherChatComponent,
    ScrollTrackerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModuleModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),

  ],
  entryComponents: [
    DialogGenericComponent
  ],
  providers: [
    RacService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
