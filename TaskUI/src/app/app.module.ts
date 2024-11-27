import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ShowtaskComponent } from './taskdetails/showtask/showtask.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { AddEditTaskComponent } from './taskdetails/add-edit-task/add-edit-task.component';
import { TaskserviceService } from './taskservice.service';



@NgModule({
  declarations: [
    AppComponent,
    ShowtaskComponent,
    AddEditTaskComponent,
    TaskdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TaskdetailsComponent }
    ])
  ],
  providers: [
    TaskserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
